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

function getVerticalSumArray(root) {
    let obj = {};

    verticalSum(root, 0, obj);
    Object.keys(obj).forEach((a) => {
        console.log(a)
    })
    console.log(obj)
}

function verticalSum(root, ld, obj) {
    if (!root) return null;
    verticalSum(root.left, ld - 1, obj);
    obj[ld] = obj[ld] ? (obj[ld] + root.key) : root.key;
    verticalSum(root.right, ld + 1, obj);
};


getVerticalSumArray(root);