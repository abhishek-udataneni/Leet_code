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
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

function countNodes(root) {
  if (!root) return 0;
  let current = root;
  let lh = 1;
  let rh = 1;
  while (current.left) {
    lh = 1 + lh;
    current = current.left;
  }
  while (current.right) {
    rh = 1 + rh;
    current = current.right;
  }

  if (lh === rh) {
    return Math.pow(2, lh) - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}

console.log(countNodes(root));
