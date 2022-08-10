/**
 depth first values
 Write a function, depthFirstValues, that takes in the root of a binary tree. 
 The function should return an array containing all values of the tree in depth-first order.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITER T: O(n) S: O(n)
const depthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root]; // [ null ] -> is one, current.val = null.val throw error
  while (stack.length > 0) {
    // remove the top of the stack
    const current = stack.pop();
    result.push(current.val);

    // check if children exist
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

// RECUR T: O(n) S: O(n)
// const depthFirstValues = (root) => {
//  base case
//   if (root === null) return [];
//   const left = depthFirstValues(root.left); // [b, d, e]
//   const right = depthFirstValues(root.right); // [c, f]
//   return [root.val, ...left, ...right];
// };

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

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

const g = new Node('g');
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']

const z = new Node('z');
//      z

console.log(depthFirstValues(z));
//    -> ['z']

a.right = b;
a.left = null;
b.left = c;
b.right = null;
c.right = d;
c.left = null;
d.right = e;
d.left = null;
e.left = null;
e.right = null;
//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e']

console.log(depthFirstValues(null));
//    -> []
