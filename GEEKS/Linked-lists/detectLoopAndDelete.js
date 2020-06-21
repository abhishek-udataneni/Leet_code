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

function detectLoopAndDelete(head){
    let slow =  head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            break;
        }
    }
    if(slow !== fast){
        return;
    }
    slow = head;
    while(slow.next !== fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = null;
    return head;
}


console.log(detectLoopAndDelete(list.head));