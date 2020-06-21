class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
};

function insertAtBegin(head,node){
    let temp = new Node(node);
    temp.next = head;
    return temp;
}
function findMiddle(head){
    let slowNode = head;
    let fastNode = head;

    while(fastNode && fastNode.next){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    };

    return slowNode.data;
}

let head = new Node(0);
// console.log(head)
head = insertAtBegin(head,5);
head = insertAtBegin(head,10);
head = insertAtBegin(head,15);
head = insertAtBegin(head,20);
head = insertAtBegin(head,25);

console.log(findMiddle(head));