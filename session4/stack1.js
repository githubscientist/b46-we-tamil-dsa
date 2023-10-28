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

inp.on("close", () => {
    let words = userInput[0].split(' ');

    let index = -1;

    do {
        index = findIndex(words);
        if (index != -1) {
            // delete the words
            words.splice(index, 2);
        }
    } while (index != -1);

    if (words.length > 0) {
        console.log(words.join(' '));
    } else {
        console.log(-1);
    }
});