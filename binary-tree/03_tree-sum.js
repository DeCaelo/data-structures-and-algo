/*
tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// // RECUR T: O(n) S: O(n) stack
// const treeSum = (root) => {
//   if (root === null) return 0;
//   const left = treeSum(root.left);
//   const right = treeSum(root.right);
//   return root.val + left + right;
// };

// ITER T: O(n) S: O(n) queue
const treeSum = (root) => {
  if (root === null) return 0;
  let totalSum = 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift(); // remove front element
    totalSum += current.val;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return totalSum;
};

let a = new Node(3);
let b = new Node(11);
let c = new Node(4);
let d = new Node(4);
let e = new Node(-2);
let f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a));
// -> 21

a = new Node(1);
b = new Node(6);
c = new Node(0);
d = new Node(3);
e = new Node(-6);
f = new Node(2);

let g = new Node(2);
let h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a));
// -> 10

console.log(treeSum(null));
// -> 0
