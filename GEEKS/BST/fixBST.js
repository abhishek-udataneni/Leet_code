// fix bst with two nodes swapped.

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(50);
root.left = new Node(40);
root.left.right = new Node(30);
root.right = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);


let first = null;
let second = null;
let prev = -Infinity;
arr = []
function fixBST(root) {
    if (!root) return;

    fixBST(root.left);
    arr.push(root.key)
    fixBST(root.right);
}

fixBST(root);
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    if (prev > arr[i]) {
        if (!first) {
            first = i - 1
        }
        second = i
    }
    prev = arr[i]
}

console.log(first, second);