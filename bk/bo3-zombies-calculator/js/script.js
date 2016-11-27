var BODYSHOT_XP = 50;
var HEADSHOT_XP = 75;
var KNIFE_XP = 100;

var SONGS = [
	new Song(1, 'Treyarch Sounds', 'Undone', 'Nacht der Untoten'),
	new Song(2, 'Elena Siegman', 'Lullaby for a Deadman', 'Verruckt'),
	new Song(3, 'Elena Siegman', 'The One', 'Shi No Numa'),
	new Song(4, 'Elena Siegman', 'Beauty of Annihilation', 'Der Riese'),
	new Song(5, 'Elena Siegman', '115', 'Kino der Toten'),
	new Song(6, 'Eminem ft. Pink', 'Won\'t Back Down', 'Five'),
	new Song(7, 'Elena Siegman', 'Abracadavre', 'Ascension'),
	new Song(8, 'Avenged Sevenfold', 'Not Ready to Die', 'Call of the Dead'),
	new Song(9, 'Elena Siegman', 'Pareidolia', 'Shangri-La'),
	new Song(10, 'Elena Siegman', 'Coming Home', 'Moon'),
	new Song(11, 'Avenged Sevenfold', 'Nightmare', 'Moon'),
	new Song(12, 'Clark S. Nova', 'Carrion', 'Tranzit'),
	new Song(13, 'Brian Tuey', 'Samantha\'s Lullaby', 'Nuketown Zombies'),
	new Song(14, 'Clark S. Nova', 'We All Fall Down', 'Die Rise'),
	new Song(15, 'Johnny Cash', 'Rusty Cage', 'Mob of the Dead'),
	new Song(16, 'Elena Siegman', 'Where Are We Going', 'Mob of the Dead'),
	new Song(17, 'Malukah ', 'Always Running', 'Buried'),
	new Song(18, 'Elena Siegman', 'Archangel', 'Origins'),
	new Song(19, 'Avenged Sevenfold', 'Shephard of Fire', 'Origins'),
	new Song(20, 'Jack Wall', 'Snakeskin Boots', 'Shadows of Evil'),
	new Song(21, 'Elena Siegman', 'Beauty of Annihilation (Remix)', 'The Giant'),
	new Song(22, 'Elena Siegman', 'Dead Again', 'Der Eisendrache')
];

$(function () {
	var curSong;
	var curSongIndex;

	var songs = SONGS;
	
	curSongIndex = 0;
	curSong = songs[curSongIndex];
	setCurSong(curSong);

	var player = document.getElementById('player');

	$('#form').on('submit', calculate);

	$('#rewind-btn').on('click', function () {
		curSongIndex--;
		if (curSongIndex < 0) {
			curSongIndex = songs.length - 1;
		}
		curSong = songs[curSongIndex];
		setCurSong(curSong);
		player.play();
	});

	$('#fast-forward-btn').on('click', fastForward);
	$(player).on('ended', fastForward);
	
	function fastForward () {
		curSongIndex++;
		if (curSongIndex > songs.length - 1) {
			curSongIndex = 0;
		}
		curSong = songs[curSongIndex];
		setCurSong(curSong);
		player.play();
	}

	$('#shuffle-btn').on('click', function () {
		songs = _.shuffle(songs);
		curSongIndex = 0;
		curSong = songs[curSongIndex];
		setCurSong(curSong);
		player.play();
	});

	$('#unshuffle-btn').on('click', function () {
		songs = SONGS;
		curSongIndex = 0;
		curSong = songs[curSongIndex];
		setCurSong(curSong);
		player.play();
	});


});

function calculate() {
	var playerCount = $('#number-players').val();
	var round = $('#round').val();

	if (isNaN(playerCount) || isNaN(round)) {
		sweetAlert('Oops...', 'You entered something that isn\'t a number.', 'error');
		return false;
	}

	if (round < 1) {
		sweetAlert('Oops...', 'You entered an invalid round.', 'error');
		return false;
	}

	if (playerCount < 1 || playerCount > 4) {
		sweetAlert('Oops...', 'You entered an invalid number of players.', 'error');
		return false;
	}

	var zombiesThisRound = getZombieCount(playerCount, round);
	var totalZombies = getTotalZombies(playerCount, round);
	var zombieHealth = getZombieHealth(round);

	var roundXP = getXPForRound(round);

	var bodyshotXP = BODYSHOT_XP * zombiesThisRound;
	var totalRoundBodyshotXP = bodyshotXP + roundXP;

	var headshotXP = HEADSHOT_XP * zombiesThisRound;
	var totalRoundHeadshotXP = headshotXP + roundXP;

	var knifeXP = KNIFE_XP * zombiesThisRound;
	var totalRoundKnifeXP = knifeXP + roundXP;

	var totalRoundXP = getTotalRoundXP(round);
	var totalBodyshotXP = BODYSHOT_XP * totalZombies + totalRoundXP;
	var totalHeadshotXP = HEADSHOT_XP * totalZombies + totalRoundXP;
	var totalKnifeXP = KNIFE_XP * totalZombies + totalRoundXP;

	//Set all of the html
	$('#zombies-this-round').text(zombiesThisRound);
	$('#zombie-health').text(zombieHealth);
	$('#total-zombies').text(totalZombies);

	$('.round-xp').text(roundXP);

	$('#round-xp-body-shots').text(bodyshotXP);
	$('#total-round-xp-body-shots').text(totalRoundBodyshotXP);

	$('#round-xp-head-shots').text(headshotXP);
	$('#total-round-xp-head-shots').text(totalRoundHeadshotXP);

	$('#round-xp-knives').text(knifeXP);
	$('#total-round-xp-knives').text(totalRoundKnifeXP)

	$('#total-xp-body-shots').text(totalBodyshotXP);
	$('#total-xp-head-shots').text(totalHeadshotXP);
	$('#total-xp-knives').text(totalKnifeXP);

	$('#results').css('display', 'block');

	return false;
}

function getXPForRound(round) {
	var xp = 50 * round;
	if (xp > 1000) {
		xp = 1000;
	}
	return xp;
}

function getTotalRoundXP(round) {
	var totalXP = 0;
	for (var i1 = 1; i1 <= round; i1++) {
		totalXP += getXPForRound(i1);
	}
	return totalXP;
}

//Zombulator functions

function getZombieCount(players, round) {
	var zombies = 0;
    if (players == 1) {
        if (round < 20) {
            var lowrounds = [6, 8, 13, 18, 24, 27, 28, 28, 29, 33, 34, 36, 39, 41, 44, 47, 50, 53, 56];
            zombies = lowrounds[round - 1];
        } else {
            zombies = Math.round((0.09 * round * round - 0.0029 * round + 23.958));
        }
    } else if (players == 2) {
        if (round < 20) {
            var lowrounds = [7, 9, 15, 21, 27, 31, 32, 33, 34, 42, 45, 49, 54, 59, 64, 70, 76, 82, 89];
            zombies = lowrounds[round - 1];
        } else {
            zombies = Math.round((0.1882 * round * round - 0.4313 * round + 29.212));
        }
    } else if (players == 3) {
        if (round < 20) {
            var lowrounds = [11, 14, 23, 32, 41, 47, 48, 50, 51, 62, 68, 74, 81, 89, 97, 105, 114, 123, 133];
            zombies = lowrounds[round - 1];
        } else {
            zombies = Math.round((0.2637 * round * round + 0.1802 * round + 35.015));
        }
    } else if (players == 4) {
        if (round < 20) {
            var lowrounds = [14, 18, 30, 42, 54, 62, 64, 66, 68, 83, 91, 99, 108, 118, 129, 140, 152, 164, 178];
            zombies = lowrounds[round - 1];
        } else {
            zombies = Math.round((0.35714 * round * round - 0.0714 * round + 50.4286));
        }
    }

    return zombies;
}

function getTotalZombies(players, round) {
    var total = 0;
    for (var i = 0; i < round; i++) {
        total = total + getZombieCount(players, (i + 1));
    }
    return total;
}

function getZombieHealth(round) {
    var health = 0;
    if (round < 10) {
        var lowHealth = [150, 250, 350, 450, 550, 650, 750, 850, 950];
        health = lowHealth[round - 1];
    } else {
        health = 950 * (Math.pow(1.1, (round - 9)));
        health = Math.round(health);
    }
    return health;
}

function setCurSong(song) {
	var player = document.getElementById('player');
	player.src = song.getSongFilename();
	$('#song').text(song.getSongArtist() + ' - ' + song.getSongName() + ' (' + song.getMap() + ')');
}


//Song object
function Song(songId, songArtist, songName, map) {
	this.getSongFilename = function() {
		return 'songs/' + songId + '.mp3';
	}

	this.getSongArtist = function() {
		return songArtist;
	}

	this.getSongName = function() {
		return songName;
	}

	this.getMap = function() {
		return map;
	}
}