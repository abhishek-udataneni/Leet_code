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
list.insertFirst(3);
list.insertFirst(-3);
list.insertFirst(-1);
list.insertFirst(1);

// Doesnt Work Ever
function removeLinkedList(head) {
    let curr = head;
    let prefix_sum = 0 ;
    let map = {};
    while(curr){
        prefix_sum = prefix_sum + curr.data;
        if(prefix_sum === 0){
            head = curr.next;
            map = {}
             removeLinkedList(head);
        }else if(map[prefix_sum]) {
            map[prefix_sum].next = curr.next;
            map = {}
             removeLinkedList(head);
        }else {
            if(!map[prefix_sum]) {
                map[prefix_sum] = curr
            }
            curr = curr.next;
        }
    }
    return head
};

// console.log(removeLinkedList(list.head));
// function bitchRemove(head){
//     let curr = head;
//     let sum = 0
//     let prefix_sum = new Set(); // Hashmap / Set
//     while (curr) {
//         sum = sum + curr.data
//         if (! prefix_sum.has(sum)){
//             prefix_sum.add(sum)
//         }
//         else{
//             console.log("Found Zero Sum")
//         }
//         curr = curr.next;
//     }
//     console.log(prefix_sum)
// }

function bitchRemove(head){
    let curr = head;
    let sum = 0;
    let prefix_sum = new Map(); // Hashmap / Set
    let index = 0;
    let pairs = []

    let lst=[]
    while (curr) {
        sum = sum + curr.data
        if (! prefix_sum.has(sum)){
            prefix_sum.set(sum, index)
        }
        else{
            old_index = prefix_sum.get(sum)
            new_index = index
            pairs.push([old_index,new_index, sum])
            prefix_sum.delete(sum)
            
            // Handle sum == 0 
            // Remove Values in Hashmap
            // Delete Nodes
        }

        lst.push(curr.data)
        curr = curr.next;
        index++
    }
    console.log("list : ", lst)
    console.log("prefix_sum : ", prefix_sum)
    console.log("pairs : ", pairs)
}

bitchRemove(list.head)

// Do Prefix Sum
// Condition Check if prefixSum doesnt exists in HashMap
// Pass : 
    // Add (PrefixSum, Index) to Hashmap
// Fails : 
    // Store PrefixSum : Index in Hashmap
    // G