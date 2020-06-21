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

function childrenSumProperty(root) {
  if (!root) return true;
  if (!root.left && !root.right) {
    return true;
  }

  sum = 0;
  if (root.right) sum = sum + root.right.key;
  if (root.left) sum = sum + root.left.key;

  return (
    root.key === sum &&
    childrenSumProperty(root.left) &&
    childrenSumProperty(root.right)
  );
}

console.log(childrenSumProperty(root));
