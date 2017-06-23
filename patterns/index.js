const patternDict = [{
  pattern: '\\b(?<saludo>Hola|Hey)\\b',
  intent: 'Hola'
}, {
  pattern: '\\b(bye|adios|chau|chao)\\b',
  intent: 'Exit'
}, {
	pattern: '(en|de)\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'
}];

module.exports = patternDict;
