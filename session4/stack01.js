// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findIndex(words) {
    for (let index = 0; index < words.length; index++){
        if (words[index] == words[index + 1]) {
            return index;
        }
    }
    return -1;
}

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
    let words = userInput[0].split(' ');

    // create a new stack
    let stack = new Stack();

    // iterate the words array
    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            // push the word to the stack
            stack.push(word);
        } else {
            // if the stack is not empty
            // check if the top of the stack and the word are equal
            if (stack.peek() == word) {
                // if the words are equal, then pop the stack
                stack.pop();
            } else {
                // push the word to the stack
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});