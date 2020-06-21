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

let diameter = 0;
function height(root) {
  if (!root) return 0;
  let lh = height(root.left);
  let rh = height(root.right);
  diameter = Math.max(diameter, 1 + lh + rh);
  return 1 + Math.max(lh, rh);
}
height(root);
console.log(diameter);
