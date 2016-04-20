var expect = require('chai').expect;

var converter = require('./fractionConverter.js');

describe('converter', () => {

  it('Should exist', () => {
    expect(converter).to.exist;
  });

  it('Should equal "1/2"', () => {
    const expected = "1/2"
    const actual = converter(0.5);

    expect(actual).to.be.eql(expected);
  });

  it('Should equal "3/1"', () => {
    const expected = "3/1"
    const actual = converter(3);

    expect(actual).to.be.eql(expected);
  });

  it('Should equal "5/2"', () => {
    const expected = "5/2"
    const actual = converter(2.5);

    expect(actual).to.be.eql(expected);
  });

  it('Should equal "11/4"', () => {
    const expected = "11/4"
    const actual = converter(2.75);

    expect(actual).to.be.eql(expected);
  });

  it('Should equal "22/25"', () => {
    const expected = "22/25"
    const actual = converter(0.88);

    expect(actual).to.be.eql(expected);
  });

})
