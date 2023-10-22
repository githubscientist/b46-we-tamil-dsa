let Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    // @insertAtTail
    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            // if the list is not empty
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    // deleteAtTail
    pop() {
        if (this.head == null) {
            return;
        } else if(this.head.next == null) {
            // list has only one node
            this.head = this.tail = null;
        } else {
            let tailPrevious = this.head;
            while (tailPrevious.next.next != null) {
                tailPrevious = tailPrevious.next;
            }
            // tailPrevious will be pointing to the tail node's previous node
            tailPrevious.next = null;
            this.tail = tailPrevious;
        }
    }

    // insertAtHead
    unshift(data) {
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    // deleteAtHead
    shift() {
        if (this.head == null) {
            return;
        } else if(this.head.next == null){
            // list has only one node
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
    }

    forEach(func) {
        let thead = this.head;
        let index = 0;
        let nodes = this.toArray();
        while (thead != null) {
            func(thead.data, index++, nodes);
            thead = thead.next;
        }
    }
}

module.exports = LinkedList;