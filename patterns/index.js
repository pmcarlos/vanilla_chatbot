const patternDict = [{
  pattern: '\\b(Hola|Hey)\\b',
  intent: 'Hola'
}, {
  pattern: '\\b(bye|adios|chau|chao)\\b',
  intent: 'Exit'
}];

module.exports = patternDict;
