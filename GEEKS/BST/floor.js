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

function floor(root, n) {
    let curr = root;
    let res = null;
    while (curr) {
        if (n === curr.key) {
            return curr.key
        } else if (n < curr.key) {
            curr = curr.left;
        } else {
            res = curr.key;
            curr = curr.right;
        }
    }
    return res;
}

console.log(floor(root, 81))