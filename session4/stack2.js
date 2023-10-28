// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        if (!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }

    isEmpty() {
        return this.top == -1;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        } else {
            return null;
        }
    }
}

inp.on("close", () => {
    let brackets = userInput[0];

    // create an empty stack
    let stack = new Stack();

    let status = 'yes';

    // traverse the words array
    for (let bracket of brackets) {
        if (bracket == '(' || bracket == '[' || bracket == '{') {
            stack.push(bracket);
        } else {
            if (bracket == ')' && stack.peek() == '(') {
                stack.pop();
            } else if (bracket == ']' && stack.peek() == '[') {
                stack.pop();
            } else if (bracket == '}' && stack.peek() == '{') {
                stack.pop();
            } else {
                status = 'no';
            }
        }
    }

    if (!stack.isEmpty()) {
        status = 'no';
    }

    console.log(status);
});