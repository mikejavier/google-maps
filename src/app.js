// const Places = require('./module/places');
const UserLocation = require('./module/user_location');

const places = [
	[-5.190452, -37.345551],
	[-22.816470, -47.07044],
	[-34.604310, -58.386207],
	[-22.681795, -43.256194]
];

google.maps.event.addDomListener(window, 'load', () => {

	const usrLoc = new UserLocation(() => {
		const mapOpt = {
			zoom:15,
			center:{
				lat: usrLoc.latitude, 
				lng: usrLoc.longitude
			}
		};

		const map = new google.maps.Map(document.getElementById('map'), mapOpt);

		const marker = new google.maps.Marker({
			position:{
				lat: usrLoc.latitude, 
				lng: usrLoc.longitude
			},
			map: map
		});

	});	
	
});



