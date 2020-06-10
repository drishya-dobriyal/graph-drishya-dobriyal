const fs = require('fs');
const { bfs } = require('./src/graph');

const main = () => {
  // const data = fs.readFileSync('./data', 'utf8');
  // const pairs = data.split('\n').map(e => e.split(','));
  // const pairs = [
  //   ['a', 'b'],
  //   ['b', 'a'],
  //   ['b', 'c']
  // ];
  // const pairs = [
  //   ['a', 'b'],
  //   ['b', 'c']
  // ];
  const source = 'a';
  const target = 'a';
  const result = bfs(pairs, source, target);
  console.log(result);
};

main();
