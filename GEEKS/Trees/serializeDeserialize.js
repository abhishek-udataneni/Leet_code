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

let arr = [];
function serialize(root, arr) {
  if (!root) {
    arr.push(-1);
    return;
  }
  arr.push(root.key);
  serialize(root.left, arr);
  serialize(root.right, arr);
}

serialize(root, arr);

console.log(arr);

let i = 0;

function deserialize(arr) {
  if (i === arr.length) {
    return null;
  }
  val = arr[i];
  i++;
  if (val === -1) {
    return null;
  }
  let root = new TreeNode(val);
  root.left = deserialize(arr);
  root.right = deserialize(arr);
  return root;
}

console.log(JSON.stringify(deserialize(arr)));
