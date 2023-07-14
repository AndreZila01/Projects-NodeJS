const add = (a, b) => {
    return a + b;
};

(function (){
    const superHero = "Link";
    console.log(superHero);
})(); // faz a função como se nada fosse.

(function (message){
    const superHero = "Zelda";
    console.log(message, superHero);
})("Hey"); // faz a função como se nada fosse.

console.log(add(1, 2));

module.exports = add;