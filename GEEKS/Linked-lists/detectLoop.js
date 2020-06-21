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
// function detectLoop(head){
//     let curr = head;
//     while(curr){
//         if(curr.visited){
//             return false
//         }else{
//             curr.visited = true;
//         }
//         curr = curr.next;
//     }
//     return true
// }

// function detectLoop(head){
//     let set = new Set();
//     let curr = head;
//     while(curr){
//         if(set.has(curr.data)){
//             return false
//         }else{
//             set.add(curr.data)
//         }
//         curr = curr.next;
//     }
//     return true
// }

function detectLoop(head){
    let slow = head;
    let fast = head;
    while(slow && fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return false;
        }
    }
    return true
}

console.log(detectLoop(list.head));