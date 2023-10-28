class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    peek() {
        if (this.top) {
            return this.top.data;
        } else {
            return -1;
        }
    }

    push(data) {
        // create a new item to push it to the stack
        let newItem = new Item(data);

        newItem.next = this.top;

        this.top = newItem;
    }

    pop() {
        if (this.top) {
            this.top = this.top.next;
        }
    }

    isEmpty() {
        return this.top == null;
    }
}


// create an empty stack
let stack = new Stack();

stack.push(3);
stack.push(5);
stack.pop();

console.log(stack.peek());