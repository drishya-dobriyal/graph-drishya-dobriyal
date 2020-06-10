const fs = require('fs');
const { bfs } = require('./src/graph');

const main = () => {
  const data = fs.readFileSync('./data', 'utf8');
  const pairs = data.split('\n').map(e => e.split(','));
  const source = 'bb';
  const target = 'jj';
  const result = bfs(pairs, source, target);
  console.log(result);
};

main();
