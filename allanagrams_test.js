var expect = require('chai').expect;

var Anagrams = require('./allAnagrams.js');

describe('All Anagrams Function', () => {
  it('Should exist', () => {
    expect(Anagrams).to.exist;
  });

  it('Should equal expected output if string is provided', () => {
    var actual = Anagrams("abc");
    var expected = [ "abc", "acb", "bac", "bca", "cab", "cba" ];

    expect(actual).to.be.eql(expected);
  });

  it('Should return -1 if empty string is provided', () => {
    var actual = Anagrams("");
    var expected = -1;

    expect(actual).to.be.eql(expected);
  });

  it('Should return array of anagrams', () => {
    var expected = ["apps","apsp","aspp","paps","pasp","ppas","ppsa","psap","pspa","sapp","spap","sppa"]
    var actual = Anagrams("apps");

    expect(actual).to.be.eql(expected);
  });
})
