class TreeNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(45);
root.left = new TreeNode(25);
root.right = new TreeNode(20);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(15);

let prev = null;
let head = null;
function binaryToLList(root) {
  if (!root) return;
  binaryToLList(root.left);
  if (!prev) {
    head = root;
  } else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;
  binaryToLList(root.right);
  //   console.log(root);
}

binaryToLList(root);
console.log(head);

//// not working ////
