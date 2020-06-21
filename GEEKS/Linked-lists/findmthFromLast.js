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

     findnthFromLast(n){
        let i = 0;
        console.log(this.head)
        let currSlow = this.head;
        let currFast = this.head;
        while(i < n){
            if(!currFast) return;
            currFast = currFast.next;
            i++
        }
        while(currFast){
            currFast = currFast.next;
            currSlow = currSlow.next;
        }
    
        return currSlow;
    }
};

let list = new LinkedList();
console.log(list);
list.insertFirst(5);
list.insertFirst(10);
list.insertFirst(15);
list.insertFirst(20);
console.log(list.findnthFromLast(2));



