class TreeNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);
root.left.left = new TreeNode(40);
root.left.left.left = new TreeNode(50);

function isBalanced(root) {
  if (!root) return 0;
  let lh = isBalanced(root.left);
  if (lh === -1) {
    return -1;
  }
  let rh = isBalanced(root.right);
  if (rh === -1) {
    return -1;
  }
  if (Math.abs(lh - rh) > 1) {
    return -1;
  } else {
    return 1 + Math.max(lh, rh);
  }
}

console.log(isBalanced(root));
