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
root.left.right = new TreeNode(50);

function maxWidth(root) {
  let queue = [root];
  let res = 0;
  while (queue.length) {
    let count = queue.length;
    res = Math.max(count, res);
    for (let i = 0; i < count; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return res;
}

console.log(maxWidth(root));
