module.exports = class userLocation {
	constructor (callback) {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((location) => {
				this.longitude = location.coords.longitude;
				this.latitude = location.coords.latitude;
				callback();
			});
		}else{
			console.log('nao tem suporte a geolocation');
		}
	}

};