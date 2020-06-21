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
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(70);

// let maxLevel = 0;
// function printLeftView(root,level){
//     if(!root) return ;
//     if(maxLevel < level){
//         console.log(root.key);
//         maxLevel = level
//     };

//     printLeftView(root.left, level + 1);
//     printLeftView(root.right, level + 1);
// };

// printLeftView(root,1)

function printLeftView(root) {
    if(!root) return;

    let queue = [];
    queue.push(root);

    while(queue.length > 0){
        let count = queue.length;
        for (let i = 0; i < count; i++) {
            let curr = queue[0];
            queue.shift()
            if(i === 0) {
                console.log(curr.key)
            }
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right)
        }
    }
}

printLeftView(root)
