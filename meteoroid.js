const got = require('got');
const fs = require('fs');
const path = require('path');
const FeedParser = require('feedparser');
const FlickrPhoto = require('flickr-photo-url')

async function getIOTDData(cb) {
  const response = await got.stream('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss');

  if (response.statusCode != 200) {
    console.error("Unable to fetch NASA IOTD data with error code " + response.statusCode);
    process.exit(1);
  }

  var feedparser = new FeedParser();
  response.pipe(feedparser);

  var obj = {};

  feedparser.on('error', function (error) {
    throw error;
  });

  var first = true;
  feedparser.on('readable', function () {
    var stream = this,
      item;
    while (item = stream.read()) {
      if (first) {
        var obj = {};
        obj.imageURL = item.enclosures[0].url;
        obj.imageView = item.link;
        cb(obj);
      }
      first = false;
    }
  });
}

async function getEOData(cb) {
  const response = await got.stream('https://earthobservatory.nasa.gov/feeds/image-of-the-day.rss');

  if (response.statusCode != 200) {
    console.error("Unable to fetch NASA EO data with error code " + response.statusCode);
    process.exit(1);
  }

  var feedparser = new FeedParser();
  response.pipe(feedparser);

  var obj = {};

  feedparser.on('error', function (error) {
    throw error;
  });

  var first = true;
  feedparser.on('readable', function () {
    var stream = this,
      item;
    while (item = stream.read()) {
      if (first) {
        var obj = {};
        obj.imageURL = item.image.url;
        obj.imageView = item.link;
        cb(obj);
      }
      first = false;
    }
  });
}

async function getAPODData() {
  const response = await got.get('https://api.nasa.gov/planetary/apod?api_key=' + process.env['NASA_API_KEY']);

  if (response.statusCode != 200) {
    console.error("Unable to fetch NASA APOD data with error code " + response.statusCode);
    process.exit(1);
  }

  const response_object = JSON.parse(response.body);
  var obj = {};

  // Prefer the HD image if available
  if (typeof response_object.hdurl !== 'undefined' && response_object.hdurl) {
    obj.imageURL = response_object.hdurl;
  } else {
    obj.imageURL = response_object.url;
  }

  // Format the URL, as long as the API doesn't change it's URL scheme, this should stay working
  obj.imageView = 'https://apod.nasa.gov/apod/ap' + response_object.date.charAt(0) + response_object.date.charAt(1) + response_object.date.charAt(5) + response_object.date.charAt(6) + response_object.date.charAt(8) + response_object.date.charAt(9) + '.html';

  return obj;
}

async function getFlickrData(id, username, cb) {
  const response = await got.stream('https://api.flickr.com/services/feeds/photos_public.gne?id=' + id + '&lang=en-us&format=rss_200');

  if (response.statusCode != 200) {
    console.error("Unable to fetch Flickr data for username " + username + " with error code " + response.statusCode);
    process.exit(1);
  }

  var feedparser = new FeedParser();
  response.pipe(feedparser);

  var obj = {};

  feedparser.on('error', function (error) {
    throw error;
  });

  var items = [];
  feedparser.on('readable', function () {
    var stream = this,
      item;
    while (item = stream.read()) {
      items.push(item);
    }
  });

  feedparser.on('end', function () {
    const item = items[Math.floor(Math.random() * items.length)];
    const photo_id = parseInt(item.link.split('/')[5]);
    FlickrPhoto(username, photo_id, FlickrPhoto.sizes.large)
      .catch(console.error).then((imageURL) => {
        var obj = {};
        obj.imageView = item.link;
        obj.imageURL = imageURL;
        cb(obj);
      });
  });
}

async function runMain() {
  // Create required directories
  if (!fs.existsSync(path.join(__dirname, 'build'))) {
    fs.mkdirSync(path.join(__dirname, 'build'));
  }
  if (!fs.existsSync(path.join(__dirname, 'build', 'meteoroid_api'))) {
    fs.mkdirSync(path.join(__dirname, 'build', 'meteoroid_api'));
  }

  // Source 1 - NASA (IOTD)
  getIOTDData(function (IOTD_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source1.json'), JSON.stringify(IOTD_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA (IOTD) (source1.json) has been successfully written');
    });
  });

  // Source 2 - NASA (EO)
  getEOData(function (EO_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source2.json'), JSON.stringify(EO_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA (EO) (source2.json) has been successfully written');
    });
  });

  // Source 3 - NASA (APOD)
  const APOD_Object = await getAPODData();
  fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source3.json'), JSON.stringify(APOD_Object), {
    flag: 'w'
  }, function (err) {
    if (err) throw err;
    console.log('NASA (APOD) (source3.json) has been successfully written');
  });

  // Source 4 - SpaceX Flickr
  getFlickrData('130608600@N05', 'spacex', function (SpaceX_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source4.json'), JSON.stringify(SpaceX_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('SpaceX Flickr (source4.json) has been successfully written');
    });
  });

  // Source 5 - NASA HQ Flickr
  getFlickrData('35067687@N04', 'nasahqphoto', function (NASA_HQ_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source5.json'), JSON.stringify(NASA_HQ_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA HQ Flickr (source5.json) has been successfully written');
    });
  });

  // Source 6 - NASA JPL Flickr
  getFlickrData('37211895@N03', 'nasa-jpl', function (NASA_JPL_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source6.json'), JSON.stringify(NASA_JPL_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA JPL Flickr (source6.json) has been successfully written');
    });
  });

  // Source 7 - NASA Johnson Flickr
  getFlickrData('29988733@N04', 'nasa2explore', function (NASA_Johnson_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source7.json'), JSON.stringify(NASA_Johnson_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA Johnson Flickr (source7.json) has been successfully written');
    });
  });

  // Source 8 - NASA Kennedy Flickr
  getFlickrData('108488366@N07', 'nasakennedy', function (NASA_Kennedy_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source8.json'), JSON.stringify(NASA_Kennedy_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA Kennedy Flickr (source8.json) has been successfully written');
    });
  });

  // Source 9 - NASA Goddard Flickr
  getFlickrData('24662369@N07', 'gsfc', function (NASA_Goddard_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source9.json'), JSON.stringify(NASA_Goddard_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA Goddard Flickr (source9.json) has been successfully written');
    });
  });

  // Source 10 - NASA Marshall Flickr
  getFlickrData('122910914@N04', 'nasamarshallphotos', function (NASA_Marshall_Object) {
    fs.writeFile(path.join(__dirname, 'build', 'meteoroid_api', 'source10.json'), JSON.stringify(NASA_Marshall_Object), {
      flag: 'w'
    }, function (err) {
      if (err) throw err;
      console.log('NASA Marshall Flickr (source10.json) has been successfully written');
    });
  });
}

runMain();
