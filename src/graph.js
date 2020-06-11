const createList = details => {
  const list = {};
  details.forEach(data => {
    const source = data[0];
    const target = data[1];
    if (list[source]) list[source].push(target);
    else list[source] = [target];
  });
  return list;
};

const updateQueue = (visited, queue, nodes) => {
  if (!nodes) return;
  for (let i = 0; i < nodes.length; i++) {
    const temp = nodes[i];
    if (!visited.includes(temp) && !queue.includes(temp)) {
      queue.push(temp);
    }
  }
};

const bfs = function(pairs, source, target) {
  const list = createList(pairs);
  const queue = [];
  const visited = [];
  updateQueue(visited, queue, list[source]);
  while (queue.length != 0) {
    const curr = queue.shift();
    if (curr === target) return true;
    visited.push(curr);
    updateQueue(visited, queue, list[curr]);
  }
  return false;
};

module.exports = { bfs };
