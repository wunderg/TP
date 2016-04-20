var expect = require('chai').expect;

var BinaryHeap = require('./binaryHeap.js');

describe('BinaryHeap', () => {
  beforeEach(() => {
    binaryHeap = new BinaryHeap();
  });

  it('Should exist', () => {
    expect(binaryHeap).to.exist;
  });

  it('Should add values to Heap', () => {
    binaryHeap.insert(4);
    expect(binaryHeap._heap).to.be.eql([4]);
  });

  it('Should add more values to Heap', () => {
  	binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);
    binaryHeap.insert(7);
    binaryHeap.insert(8);
    expect(binaryHeap._heap).to.be.eql([4, 5, 6, 7, 8]);
  });

  it('Should sort values on insert', () => {
  	binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);
    binaryHeap.insert(7);
    binaryHeap.insert(8);
    binaryHeap.insert(0);
    expect(binaryHeap._heap).to.be.eql([0, 5, 4, 7, 8, 6]);
  });

  it('Should remove the root', () => {
  	binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);
    binaryHeap.insert(7);
    binaryHeap.insert(8);
    binaryHeap.insert(0);
    binaryHeap.removeRoot();
    expect(binaryHeap._heap).to.be.eql([4, 5, 6, 7, 8]);
  });

  it("Should return root when removeRoot", () => {
  	binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);
    binaryHeap.insert(7);
    binaryHeap.insert(8);

    expect(binaryHeap.removeRoot()).to.be.equal(4);
  });

})

