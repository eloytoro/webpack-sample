var expect = require('chai').expect;
var concat = require('../src/concat.js');

describe('concat', () => {
  it('deberia concantenar con un espacio', () => {
    var result = concat('Hola', 'Mundo');
    expect(result).to.contain('Mundo');
  });
});
