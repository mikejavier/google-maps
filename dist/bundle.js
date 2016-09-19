(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// const Places = require('./module/places');
var UserLocation = require('./module/user_location');

var places = [[-5.190452, -37.345551], [-22.816470, -47.07044], [-34.604310, -58.386207], [-22.681795, -43.256194]];

google.maps.event.addDomListener(window, 'load', function () {

	var usrLoc = new UserLocation(function () {
		var mapOpt = {
			zoom: 15,
			center: {
				lat: usrLoc.latitude,
				lng: usrLoc.longitude
			}
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOpt);

		var marker = new google.maps.Marker({
			position: {
				lat: usrLoc.latitude,
				lng: usrLoc.longitude
			},
			map: map
		});
	});
});

},{"./module/user_location":2}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function userLocation(callback) {
	var _this = this;

	_classCallCheck(this, userLocation);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (location) {
			_this.longitude = location.coords.longitude;
			_this.latitude = location.coords.latitude;
			callback();
		});
	} else {
		console.log('nao tem suporte a geolocation');
	}
};

},{}]},{},[1]);
