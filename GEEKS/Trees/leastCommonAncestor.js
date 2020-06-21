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
n1 = new TreeNode(40);
n2 = new TreeNode(50);
root.left.left = n1;
root.left.right = n2;

function leastCommonAncestor(root, n1, n2) {
  let path1 = [];
  let path2 = [];

  if (
    findPath(root, path1, n1) === false ||
    findPath(root, path2, n2) === false
  ) {
    return null;
  }

  for (let i = 0; i < path1.length - 1 && i < path2.length - 1; i++) {
    if (path1[i + 1] !== path2[i + 1]) {
      return path1[i];
    }
  }
  return null;
}

function findPath(root, p, node) {
  if (!root) return false;
  p.push(root);
  if (root === node) return true;
  if (findPath(root.left, p, node) || findPath(root.right, p, node)) {
    return true;
  }
  p.pop();
  return false;
}

console.log(leastCommonAncestor(root, n1, n2));
