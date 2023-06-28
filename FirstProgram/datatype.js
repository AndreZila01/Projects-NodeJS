const people = ["Aaron", "Mel", "John"];
// const one = 1;
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};

function sayHello(person) {
  console.log("Hello " + person.firstName);
}

console.log("-- typeof --");//diz o que é este nome
console.log(typeof people);//object
console.log(typeof one);//object
console.log(typeof str);//string
console.log(typeof b);//bool
console.log(typeof person);//object
console.log(typeof sayHello);

console.log("-- instanceof --"); //O operador instanceof é um operador em JavaScript que verifica se um objeto pertence a uma determinada classe ou se é uma instância de uma classe específica.
//Ele retorna um valor booleano, ou seja, true se o objeto for uma instância da classe especificada, e false caso contrário.
console.log(people instanceof Array);//é um array, true
console.log(one instanceof Number);//é um numero, true
console.log(str instanceof String);//é uma string, false
console.log(b instanceof Boolean);//é um bool, false
console.log(person instanceof Object);//é um objeto, false
console.log(sayHello instanceof Function);//é uma função, true