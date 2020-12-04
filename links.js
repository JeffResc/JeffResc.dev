// Node.js script to create links.html

// Requirements
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Items
const links = require(path.join(__dirname, 'items', 'links.json'));

// Generate Links HTML Function
function generate_links_html() {
    ejs.renderFile(path.join(__dirname, 'templates', 'links.ejs'), links, {}, function(err, str) {
        if (err) throw err;
        fs.writeFile(path.join(__dirname, 'build', 'links.html'), str, {
            flag: 'w'
        }, function(err) {
            if (err) throw err;
            console.log('links.html has been successfully written');
        });
    });
}

generate_links_html();