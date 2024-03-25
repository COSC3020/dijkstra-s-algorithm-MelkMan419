//based structure off classmates test functions
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let graph1 = [
  [0, 3, 4, 6, 9, 1, 1],
  [0, 0, 10, 0, 0, 0, 0],
  [8, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 7, 0],
  [8, 0, 0, 0, 0, 0, 1],
  [0, 3, 0, 0, 0, 0, 0]
];

let graph2 = [
  [0, 2, 1, 4, 0, 0, 0],
  [0, 0, 1, 0, 10, 2, 0],
  [9, 0, 0, 0, 8, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4, 2, 0]
];

let graph3 = [
  [0, 1, 0, 4, 0, 0, 0],
  [0, 0, 15, 3, 0, 0, 1],
  [2, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 4],
  [0, 20, 9, 0, 0, 3, 0],
  [0, 0, 4, 0, 4, 0, 0],
  [0, 0, 0, 0, 2, 0, 0]
];

let graph4 = [
  [0, 1, 0, 4, 0, 0, 0, 0],
  [0, 0, 15, 3, 0, 0, 1, 0],
  [2, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0],
  [0, 20, 9, 0, 0, 3, 0, 0],
  [0, 0, 4, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

assert(JSON.stringify(dijkstra(graph1, 0)) == JSON.stringify([0,3,4,5,7,1,1]));
assert(JSON.stringify(dijkstra(graph1, 5)) == JSON.stringify([8,4,12,13,15,0,1]));
assert(JSON.stringify(dijkstra(graph2, 2)) == JSON.stringify([9,11,0,13,8,11,9]));
assert(JSON.stringify(dijkstra(graph2, 4)) == JSON.stringify([18,20,9,7,0,3,1]));
assert(JSON.stringify(dijkstra(graph3, 1)) == JSON.stringify([12,0,10,3,3,6,1]));
assert(JSON.stringify(dijkstra(graph3, 5)) == JSON.stringify([6,7,4,10,4,0,8]));
assert(JSON.stringify(dijkstra(graph4, 1)) == JSON.stringify([12,0,10,3,3,6,1,Infinity]));

