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
let list1 = new LinkedList();
let list2 = new LinkedList();


list1.insertFirst(7);
list1.insertFirst(5);
list1.insertFirst(3);
list1.insertFirst(1);






list2.insertFirst(8);
list2.insertFirst(6);
list2.insertFirst(4);
list2.insertFirst(2);


function mergeTwoSortedLists(list1,list2){
    if(!list1) return list2;
    if(!list2) return list1;

    let node = new Node(0);
    let curr = node;
    while(list1 && list2){
        if(list1.data > list2.data){
            curr.next = list2;
            curr = list2;
            list2 = list2.next
        }else{
            curr.next = list1;
            curr = list1
            list1 = list1.next
        }
    }
    if(list1) {
        curr.next = list1; 
    }
    if(list2) {
        curr.next = list2; 
    }
    return node.next;
}

console.log(JSON.stringify(mergeTwoSortedLists(list1.head, list2.head)));