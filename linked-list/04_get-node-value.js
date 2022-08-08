/*
get node value
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.
If there is no node at the given index, then return null.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// RECUR
// T: O(n) S: O(n)
// const getNodeValue = (head, index) => {
//   2 base cases: if target is out of range & count === 0 done
//   if (head === null) return null;
//   if (count === 0) return head.val;
//   return getNodeValue(head.next, index - 1);
// };

// ITER
// T: O(n) S: O(1)
const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.val; // done
    count += 1;
    current = current.next;
  }
  return null; // if target is out of range
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d

console.log(getNodeValue(a, 2));
// 'c'
console.log(getNodeValue(a, 3));
// 'd'
console.log(getNodeValue(a, 7));
// null

const node1 = new Node('banana');
const node2 = new Node('mango');
node1.next = node2;
// banana -> mango

console.log(getNodeValue(node1, 0));
// 'banana'
console.log(getNodeValue(node1, 1));
// 'mango'
