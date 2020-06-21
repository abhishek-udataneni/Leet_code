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

function findNextGreatValue(arg) {
    let curr = arg.right;
    while (curr && curr.left) {
        curr = curr.left;
    };
    return curr
};
function deleteNode(root, n) {
    if (!root) return null;
    if (n > root.key) {
        root.right = deleteNode(root.right, n);
    };
    if (n < root.key) {
        root.left = deleteNode(root.left, n)
    } else {
        if (!root.right) return root.left;
        else if (!root.left) return root.right;
        else {
            let curr = findNextGreatValue(root);
            root.key = curr.key;
            root.right = deleteNode(root.right, curr.key);
        }
        return root;
    }
    return root
}



console.log(deleteNode(root, 50));