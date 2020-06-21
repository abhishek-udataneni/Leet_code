inorder = ['D', 'B', 'E', 'A', 'F', 'C'];
preOrder = ['A', 'B', 'D', 'E', 'C', 'F'];

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let search = (inorder, start, end, tNode) => {
  for (let i = start; i <= end; i++) {
    if (inorder[i] === tNode.key) {
      return i;
    }
  }
};

let preIndex = 0;
function makeBtreeWithPreIn(pre, inorder, start, end) {
  if (start > end) {
    return null;
  }
  let tNode = new TreeNode(preOrder[preIndex++]);
  if (start === end) {
    return tNode;
  }
  let inIndex = search(inorder, start, end, tNode);

  tNode.left = makeBtreeWithPreIn(pre, inorder, start, inIndex - 1);
  tNode.right = makeBtreeWithPreIn(pre, inorder, inIndex + 1, end);
  return tNode;
}

console.log(makeBtreeWithPreIn(preOrder, inorder, 0, inorder.length - 1));
