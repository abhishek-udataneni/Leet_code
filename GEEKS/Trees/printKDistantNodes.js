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

function printKDistantNodes(root,k) {
    if(!root){
        return ;
    }
    if(k === 0){
        console.log(root.key)
    } else {
        printKDistantNodes(root.left,k-1);
        printKDistantNodes(root.right,k-1);
    }
}

printKDistantNodes(root,1)