
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

let set = [];
function pairSum(root, sum) {
    if (!root) return false;
    if (pairSum(root.left, sum)) {
        return true;
    };
    if (set.includes(sum - root.key)) {
        return true;
    } else {
        set.push(root.key)
    }
    return pairSum(root.right, sum)
};

console.log(pairSum(root, 70))
