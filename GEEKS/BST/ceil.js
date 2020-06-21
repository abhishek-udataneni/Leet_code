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

function ceil(root, n) {
    let res = null;
    let curr = root;

    while (curr) {
        if (n === curr.key) return n
        else if (n > curr.key) {
            curr = curr.right;
        } else {
            res = curr.key;
            curr = curr.left;
        }
    }
    return res;
}

console.log(ceil(root, 79))