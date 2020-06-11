const { assert } = require('chai');
const { bfs } = require('../src/graph');

describe('BFS', function() {
  it('should return false for single node not connected to itself', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c']
    ];
    const source = 'a';
    const target = 'a';
    assert.isFalse(bfs(pairs, source, target));
  });
  it('should return true for single node connected to itself', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'e'],
      ['b', 'a']
    ];
    const source = 'a';
    const target = 'a';
    assert.isTrue(bfs(pairs, source, target));
  });
  it('should return true for two node connected to eachOther', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'a']
    ];
    const source = 'a';
    const target = 'a';
    assert.isTrue(bfs(pairs, source, target));
  });
  it('should return false for two node not connected to eachOther', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'c']
    ];
    const source = 'c';
    const target = 'a';
    assert.isFalse(bfs(pairs, source, target));
  });
});
