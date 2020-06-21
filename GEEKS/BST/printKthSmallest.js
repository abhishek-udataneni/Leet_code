class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(45);
root.left = new Node(15);
root.right = new Node(20);
root.left.left = new Node(10);
root.left.right = new Node(18);

let count = 0
function printKthSmallest(root, k) {
    if (!root) return;

    printKthSmallest(root.left, k);
    if (count === k) {
        console.log(root.key);
    }
    count++
    printKthSmallest(root.right, k);

}

printKthSmallest(root, 2)