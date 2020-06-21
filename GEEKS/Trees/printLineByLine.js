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

function printLineByLine(root){
    let queue = [null,root];
    while(queue.length > 1){
        let curr = queue[0];
        queue.shift();
        if(!curr){
            console.log("n");
            queue.push(null);
            continue;
        }
        console.log(curr.key);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
};

console.log(printLineByLine(root));








