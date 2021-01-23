class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue {
        constructor() {
            this.front = null;
            this.back = null;
        }


    isEmpty() {
        return !this.front;
    }

    enqueue(value){
        //create a new node with value
        let  node = new Node(value);


        //if queue is empty
        if(this.isEmpty()) {
            // point the front and back to node
            this.front = this.back = node;
        }
        

        //else the queue is not empty
        else{
        // push node to the back of the queue
        // by point the last node to the newly created node
        this.back.next = node;

        //move the back of the pointer to new node
        this.back = node;
        }
        this.print();
    }

    print() {
        //queue is empty
        if(this.isEmpty()) {
            console.log("EMPTY QUEUE")
        }
        
        //else not
        else{
        //temp Arr
        let tmpArr = [];
        //temp var to the front of the queue
        let tmp = this.front;
        //iterate through the queue
        while(tmp) {
        //add value into temp Arr
        tmpArr.push(tmp.value);
        //move to the next element
        tmp=tmp.next;
        }
        
        //print the value
        console.log(tmpArr.join(','));
        }
    }
}
