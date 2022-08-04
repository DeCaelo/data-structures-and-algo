class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

// ITER
const printLinkedList = (head) => {
  // initial pointer a
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

// RECUR
// const printLinkedList = (head) => {
//   if (head === null) return;
//   console.lol(head.val)
//   printLinkedList(head.next)
// };

printLinkedList(a);
