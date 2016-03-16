// var url = 'https://www.google.com/maps/@38.6337794,-76.8123652,6z/data=!5m1!1e1'
var url = 'https://www.google.com/maps/@38.8613032,-77.0776761,11.06z/data=!5m1!1e1'


function loadMap() {
	var page = require('webpage').create()

	page.viewportSize = {
	  width: 1200,
	  height: 1200
	}

	page.open(url, function(success){
		var timestamp = (new Date()).toLocaleString();

		console.log(success, timestamp);
		if(success) {
			map_wait(timestamp);
		}
	});

	function map_wait(timestamp) {
		setTimeout(function() {
			page.render('screengrabs/map-' + timestamp + '.png');
		}, 10000);
	}
}

loadMap()
var interval = setInterval(loadMap, 1000*60*5)