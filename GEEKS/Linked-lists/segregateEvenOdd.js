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


function segregateEvenOdd(head) {
    let evenStart = null;
    let evenEnd = null;
    let oddStart = null;
    let oddEnd = null;

    for(let curr = head; curr !== null; curr = curr.next){
        let data = curr.data;
        if(data%2 === 0){
            if(!evenStart){
                evenStart = curr;
                evenEnd = curr;
            }else {
                evenStart.next = curr;
                evenEnd = evenEnd.next;
            }
        }else{
            if(!oddStart){
                oddStart = curr;
                oddEnd = curr;
            }else {
                oddStart.next = curr;
                oddEnd= oddEnd.next;
            }
        }
    }

    if(!oddStart || !evenStart){
        return ;
    }
    evenEnd.next = oddStart;
    oddEnd.next = null; // need to make this null cause it has not been handled.
    return evenStart;
}


console.log(segregateEvenOdd(list.head));