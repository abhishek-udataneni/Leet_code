class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
};

class LinkedList {
    constructor(head = null){
        this.head = head
    }

    insertFirst(node){
        let temp = new Node(node);
        temp.next = this.head;
        this.head = temp;
    };
};
let list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);


function pairWiseSwap(head){
    if(!head || !head.next) return;
    let prev = head;
    let curr = head.next.next;
    head = head.next;
    head.next = prev;

    while(curr && curr.next){
        prev.next = curr.next;
        prev = curr;
        let next = curr.next.next;
        curr.next.next = curr;
        curr = next;
    }
    prev.next = curr;
    return head;
}


console.log(pairWiseSwap(list.head));