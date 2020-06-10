const createList = details => {
  const list = {};
  details.forEach(data => {
    if (list[data[0]]) list[data[0]].push(data[1]);
    else list[data[0]] = [data[1]];
  });
  return list;
};

const bfs = function(pairs, source, target) {
  const list = createList(pairs);
  const queue = [];
  const visited = [];
  queue.push(source);

  while (queue.length != 0) {
    const curr = queue.shift();
    if (curr === target) return true;
    visited.push(curr);
    for (let i = 0; i < list[curr].length; i++) {
      const temp = list[curr][i];
      if (!visited.includes(temp) && !queue.includes(temp)) {
        queue.push(temp);
      }
    }
  }

  return false;
};

module.exports = { bfs };
