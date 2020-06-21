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
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(70);

root.left.left.right = new TreeNode(40);
root.left.right.left = new TreeNode(50);
root.right.left.right = new TreeNode(60);
root.right.right.left = new TreeNode(70);

function spiralTreeTraversal(root) {
  let queue = [root];
  let stack = [];
  let rev = false;
  while (queue.length) {
    let curr = queue.length;

    for (let i = 0; i < curr; i++) {
      let first = queue[0];
      queue.shift();
      console.log(first.key);
      if (rev) {
        if (first.left) stack.push(first.left);
        if (first.right) stack.push(first.right);
      } else {
        if (first.left) queue.push(first.left);
        if (first.right) queue.push(first.right);
      }
    }
    while (stack.length) {
      debugger;
      queue.push(stack.pop());
    }
    rev = !rev;
  }
}

// function spiralTreeTraversal(root) {
//   let s1 = [];
//   let s2 = [];
//   s1.push(root);

//   while (s1.length || s2.length) {
//     while (s1.length) {
//       let temp = s1.pop();
//       console.log(temp.key);
//       if (temp.right) s2.push(temp.right);
//       if (temp.left) s2.push(temp.left);
//     }
//     while (s2.length) {
//       let temp = s2.pop();
//       console.log(temp.key);
//       if (temp.left) s1.push(temp.left);
//       if (temp.right) s1.push(temp.right);
//     }
//   }
// }
spiralTreeTraversal(root);
