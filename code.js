//used repl.it insight to help write these
function dijkstra(graph, sourceNode) {
  let dist = [];
  let visitedNodes = [];
  for (let i = 0; i < graph.length; i++) {
    dist[i] = Infinity;
  }
    
  dist[sourceNode] = 0;
  while (visitedNodes.length != graph.length) {
    let node = 0;
    let min = Infinity;
    for (let i = 0; i < graph.length; i++) {
      if (dist[i] < min && visitedNodes.indexOf(i) === -1) {
        min = dist[i];
        node = i;
      }
    }

    visitedNodes.push(node);
    for (let nextNode = 0; nextNode < graph.length; nextNode++) {
      let tempDistance = dist[node] + graph[node][nextNode];
      if (graph[node][nextNode] > 0 && dist[nextNode] > tempDistance) {
        dist[nextNode] = tempDistance;
      }
    }
  }
  return dist;
}
