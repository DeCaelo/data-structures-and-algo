/*
zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
The function should zipper the two lists together into single linked list by alternating nodes. 
If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
The function should return the head of the zippered linked list.
Do this in-place, by mutating the original Nodes.
You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITER
// T: O(min(m, n)) S: O(1)
const zipperLists = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      // even
      tail.next = current2;
      current2 = current2.next;
    } else {
      // odd
      tail.next = current1;
      current1 = current1.next;
    }
    count += 1;
    tail = tail.next;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
};

// RECUR
// T: O(min(m, n)) S: O(n)
// const zipperLists = (head1, head2) => {
//   // 3 base cases
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;

//   const next1 = head1.next;
//   const next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);

//   return head1;
// };

// a -> b -> c
// h1   n1

// x -> y -> z
// h2   n2

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

const s = new Node('s');
const t = new Node('t');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

const w = new Node('w');

// test_00:
a.next = b;
b.next = c;
// a -> b -> c
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

// test_01:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z -> d -> e -> f

// test_02:
s.next = t;
// s -> t
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

console.log(zipperLists(s, one));
// s -> 1 -> t -> 2 -> 3 -> 4

// test_03:
one.next = two;
two.next = three;
// 1 -> 2 -> 3

console.log(zipperLists(w, one));
// w -> 1 -> 2 -> 3

// test_04:
one.next = two;
two.next = three;
// 1 -> 2 -> 3

console.log(zipperLists(one, w));
// 1 -> w -> 2 -> 3
