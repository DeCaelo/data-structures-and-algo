/*
breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// T: O(n) S: 0(n)
const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift(); // remove front of my queue
    values.push(current.val);

    if (current.left !== null) queue.push(current.left); // left leave the queue first
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(breadthFirstValues(a));
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const z = new Node('z');
// z
console.log(breadthFirstValues(z));
//    -> ['z']

const x = new Node('x');
a.right = b;
a.left = null;
b.left = c;
b.right = null;
c.left = x;
c.right = d;
d.right = e;
d.left = null;
e.left = null;
e.right = null;
//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'x', 'd', 'e']

console.log(breadthFirstValues(null));
//    -> []
