'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
const matcher = require('./matcher');
const weather = require('./weather');
const {currentWeather} = require('./parser');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
	matcher(reply, data => {
		switch(data.intent) {
			case 'Hola':
				console.log(`${data.entities.saludo} qué tal?`);
				rl.prompt();
				break;
			case 'Exit':
				console.log('Excelente día!');
				process.exit(0);
				break;
			case 'CurrentWeather':
				console.log(`Estoy realizando tu consulta`);
				console.log('citi', data.entities.city);
				weather(data.entities.city, 'current')
				.then(response => {
					let parseResult = currentWeather(response);
					console.log(parseResult);
					rl.prompt();
				})
				.catch(error => {
					console.log("Ocurrió un error al realizar tu consulta");
					rl.prompt();
				});
				break;
			default: {
				console.log('No te entiendo :(');
				rl.prompt();
			}
		}
	});
});