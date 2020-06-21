class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(50);
root.left = new Node(30);
root.left.right = new Node(40);
root.right = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);


// function checkBST(root, start = -Infinity, end = Infinity) {
//     if (!root) return true;

//     return (start < root.key && end > root.key) &&
//         checkBST(root.left, start, root.key) &&
//         checkBST(root.right, root.key, end);
// }

let prev = -Infinity
function checkBST(root, start = -Infinity, end = Infinity) {
    if (!root) return true;
    checkBST(root.left);
    if (root.key <= prev) return false
    prev = root.key;
    return checkBST(root.right);
}

console.log(checkBST(root, -Infinity, Infinity));