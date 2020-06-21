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

// function reverseKLinkedLists(head, k){
//     let curr = head;
//     let prevFirst = null;
//     isFirstPass = true;
//     while(curr){
//         let first = curr;
//         let prev = null;
//         let count = 0;
//         while(curr && count < k){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//             count++
//         }
//         if(isFirstPass){
//             head = prev;
//             isFirstPass = false;
//         }else {
//             prevFirst.next = prev;
//         }
//         prevFirst = first;
//     }
//     return head;
// }

function reverseKLinkedLists(head,k){
    let curr = head;
    let prev = null;
    let temp = null;
    let count = 0;
    while(curr && count < k){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        count++;
        curr = temp
    };
    if(temp){
        res_next = reverseKLinkedLists(temp,k);
        head.next = res_next
    }
    return prev
}

console.log(reverseKLinkedLists(list.head, 2 ));