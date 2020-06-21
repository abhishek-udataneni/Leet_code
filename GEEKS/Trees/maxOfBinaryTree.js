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

function maxOfBinaryTree(root) {
    if(!root) return -Infinity;
    else {
        return Math.max(
        root.key,
        Math.max(
            maxOfBinaryTree(root.left),
            maxOfBinaryTree(root.right)
        )
        );
    }
}

console.log(maxOfBinaryTree(root));