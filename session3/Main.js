let LinkedList = require('./LinkedList');

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.pop();

list.unshift(2);
list.unshift(1);
list.unshift(0);
list.shift();

// console.log(list.toArray());

list.forEach((value, index, array) => {
    console.log(value, index, array);
})