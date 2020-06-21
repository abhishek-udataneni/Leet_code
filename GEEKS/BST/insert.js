class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(45);
root.left = new Node(15);
root.right = new Node(20);
root.left.left = new Node(10);
root.left.right = new Node(18);

// function insert(root, n) {
//   let node = new Node(n);
//   if (!root) {
//     root = node;
//     return root;
//   }
//   let curr = root;
//   while (curr) {
//     if (node.key > curr.key) {
//       if (!curr.right) {
//         curr.right = node;
//         return root;
//       }
//       curr = curr.right;
//     } else {
//       if (!curr.left) {
//         curr.left = node;
//         return root;
//       }
//       curr = curr.left;
//     }
//   }
// }

function insert(root, n) {
  if (!root) {
    return new Node(n);
  }
  if (n > root.key) {
    root.right = insert(root.right, n);
  }
  if (n < root.key) {
    root.left = insert(root.left, n);
  }
  return root;
}
console.log(JSON.stringify(insert(root, 5)));
