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

function reverseLinkedList(head){
    let curr = head;
    let prev = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};
// function reverseLinkedListRecursive(head,prev=null) {
//     if(!head){
//         return prev
//     }
//     next = head.next;
//     head.next = prev;
//     prev = head;
//     return reverseLinkedListRecursive(next,prev);
// }

// function reverseLinkedListRecursive(head) {
//     if(!head.next){
//        list.head = head
//        return ;
//     }
//      reverseLinkedListRecursive(head.next);
//      head.next.next = head;
//      head.next = null;
// }

function reverseLinkedListRecursive(head) {
    if(!head.next){
       return head;
    }
    let temp = reverseLinkedListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return temp;
}

console.log(reverseLinkedListRecursive(list.head));
console.log(list.head)

