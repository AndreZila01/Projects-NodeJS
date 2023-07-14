// require("./sum.js"); // executa logo o codigo deste ficheiro
const add = require("./sum.js");

const { EventEmitter } = require('events');//importar bibliotecas
const eventEmitter = new EventEmitter(); // variavel global

function sayHello(name) {
    console.log("Hello, " + name);//criada a função sayHello e imprimir o valor do name
    console.log(`Hello, ${name}!`);//criada a função sayHello e imprimir o valor do name
}

eventEmitter.on('lunch', () => {
    console.log('Hi\n');
});

sayHello("Peter");

eventEmitter.emit('lunch');
eventEmitter.emit('lunchs');
eventEmitter.emit('lunch');

function reverseString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"));//eM esreveR

let num1 = 1;
let num2 = "1";

console.log(num1 + num2);//11
console.log(num1 + 1);//2

const adds = (a, b) => {
    return a + b;
};

console.log(add(1, 2));