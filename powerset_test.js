var expect = require('chai').expect;

var powerset = require('./powerset.js');

describe('Powerset', () => {

  it('Should exist', () => {
    expect(powerset).to.exist;
  });

  it('Should accept string "a" and output expected result', () => {
    const expected = [ "", "a" ];
    const actual = powerset('a')

    expect(actual).to.be.eql(expected);
  });

  it('Should accept string "ab" and output expected result', () => {
    const expected = [ "", "a", "ab", "b" ];
    const actual = powerset('ab')

    expect(actual).to.be.eql(expected);
  });

  it('Should accept string "horse" and output expected result', () => {
    const expected = [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ];
    const actual = powerset('horse')

    expect(actual).to.be.eql(expected);
  });
})
