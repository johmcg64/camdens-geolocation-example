function init() {
	document.addEventListener("deviceready", deviceready, true);
}

function onGeoError(e) {
	$("#status").html("An error with the geolocation. Sorry");
};

function onCurrentGeoSuccess(position) {

	var s = 'Latitude: '    + position.coords.latitude          + '<br/>' +
      'Longitude: '         + position.coords.longitude         + '<br/>' +
      'Altitude: '          + position.coords.altitude          + '<br/>' +
      'Accuracy: '          + position.coords.accuracy          + '<br/>' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br/>' +
      'Heading: '           + position.coords.heading           + '<br/>' +
      'Speed: '             + position.coords.speed             + '<br/>' +
      'Timestamp: '         + new Date(position.timestamp)      + '<br/>';

	s+= '<p><img src="http://maps.googleapis.com/maps/api/staticmap?center='+position.coords.latitude+
		','+position.coords.longitude+'&zoom=12&size=150x150&scale=2&sensor=false"></p>';

	$("#status").html(s);
};

function deviceready() {
	$("#status").html("Getting location...<br/>");
	navigator.geolocation.getCurrentPosition(onCurrentGeoSuccess, onGeoError);
	
}