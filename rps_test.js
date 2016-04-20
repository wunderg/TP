var expect = require('chai').expect;

var RPS = require('./rps.js').RPS;

describe('RPS is a function', () => {
  it('Should exist', () => {
    expect(RPS).to.exist;
  });

  it('Should equal expected output if string is provided', () => {
    var actual = RPS(1);
    var expected = ["r", "p", "s"];

    expect(actual).to.be.eql(expected);
  });

  it('Should equal expected output if string is provided', () => {
    var actual = RPS(2);
    var expected = ["rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"];

    expect(actual).to.be.eql(expected);
  });

  it('Should equal expected output if string is provided', () => {
    var actual = RPS(3);
    var expected = ["rrr", "rrp", "rrs", "rpr", "rpp", "rps", "rsr", "rsp", "rss", "prr", "prp", "prs", "ppr", "ppp", "pps", "psr", "psp", "pss", "srr", "srp", "srs", "spr", "spp", "sps", "ssr", "ssp", "sss"]
    expect(actual).to.be.eql(expected);
  });
});
