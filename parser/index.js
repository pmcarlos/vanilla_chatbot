'use strict';

let getFeel = temp => {
	if(temp<5) {
		return 'Me congelo en';
	} else if(temp>=5 && temp<15) {
		return 'Qué fresco se siente';
	} else if(temp>=15 && temp<25) {
		return 'Que agradable está';
	} else if(temp>=25 &&temp<33) {
		return 'Qué calor en';
	} else {
		return 'Saca la caguama que estamos en';
	}
}

let currentWeather =  response => {
	if(reponse.query.results) {
		let resp = response.query.results.channel;
		let location = `${resp.location.city}, ${resp.location.country}`;
		//Condiciones
		let {text, temp} = resp.item.condition;

		return `${getFeel(Number(temp))} ${location} a ${temp}°C y ni una nube en el cielo`;
	}
}

module.exports = {
	currentWeather
}