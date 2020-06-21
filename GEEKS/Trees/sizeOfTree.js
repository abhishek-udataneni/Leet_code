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

// console.log(root);
// let count = 0;
// function sizeOfTree(root) {
//     if(!root){ return; }
//     count++;
//     sizeOfTree(root.left);
//     sizeOfTree(root.right);
// };

function sizeOfTree(root) {
if(!root) return 0;
else {
    return 1 + sizeOfTree(root.left) + sizeOfTree(root.right)
}
};
console.group(sizeOfTree(root))
// console.log(count);