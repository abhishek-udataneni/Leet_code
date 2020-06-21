class TreeNode{
    constructor(key,left=null,right=null){
        this.key = key;
        this.left = left;
        this.right = right;
    }
};

let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);

// function heightOfTree(root) {
//     let queue = [null,root];
//     let count = 0;
//     while(queue.length > 1){
//         let curr = queue[0];
//         queue.shift();
//         if(!curr){
//             count++;
//             queue.push(null);
//             continue;
//         }
//         if(curr.left) queue.push(curr.left);
//         if(curr.right) queue.push(curr.right);
//     }
//     return count;
// };

function heightOfTree(root) {
    if(!root) return 0;
    else {
        return 1 + Math.max(
            heightOfTree(root.left),
            heightOfTree(root.right)
            );
    }
};

console.log(heightOfTree(root));