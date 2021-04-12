function newFunction(name, age, country) {
    var name = name || 'Juan';
    var age = age || '22';
    var country = country || 'MX';
    console.log(name, age, country);
}
//con ES6
function newFunction2(name = 'Juan', age = 22, country = 'MX') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', '23', 'CO');

let happy = "Happy";
let hacking = "Hacking";
let HappyHacking = happy + ' ' + hacking;
console.log(HappyHacking);
//ES6 -> literal strings
//las `` se llaman comillas francesas :o
let HappyHacking2 = `${happy} ${hacking}`;
console.log(HappyHacking2);

//multilineas
let lorem = "Lorem superposés valise pourparlers rêver chiots rendez-vous naissance Eiffel myrtille. Grèves Arc de Triomphe encore pourquoi sentiments baguette\n"
+ "oui oui oui";
//multilineas es6
let lorem2 = `Oui Oui Alouette
Je te plumerei la tete`;

console.log(lorem);
console.log(lorem2);

//destructuracion de elementos
let person = {
    'name' : 'Juan',
    'age': 22,
    'country': 'MX'
}
console.log(person.name, person.age);

//ES6 -> extraer los datos del objeto
let {name, age, country } = person;
console.log(name,age,country);

let team1 = ['Juan','Julian','Ricardo'];
let team2 = ['Roxana','Ana','Mariana'];
//Merge de arrays con ES6
let education = ['David', 'Yess', ...team1, ...team2]; //los '...' traen todos los elementos de ese arreglo
console.log(education);

//uso de let
{
    var globalVar = 'gloabl variable';
}
//con let unicamente esta disponible en el scope
{
    let globalLet = "Global Let";
    console.log(globalLet);
}
console.log(globalVar);

//const en ES6
const a = 'b';

//creacion de un objeto
let name = 'Juan';
let age = 22;

obj = {name: name, age: age};
//creacion de un objeto con ES6
obj2 = {name,age};
console.log(obj);
console.log(obj2);


//arrow function
const names = [
    {name: 'Juan', age: 22},
    {name: 'JAmes', age: 27},
]
//ES5
let listOfNames = names.map(function (item){
    console.log(item.name);
})
//ES6
let listOfNames2 = names.map(item =>(item.name));
const square = num => num *num;


//promesas
const helloPromise = () =>{ //asignamos una funcion (arrow function en este caso)
    return new Promise((resolve, reject) =>{
        if(true){//validamos la condicion de la promesa y asignamos las respuestas que dara
            resolve('Todo bien!');
        }else{
            reject('Todo mal :(')
        }
    });
}
helloPromise().then(response => console.log(response)).catch(error => console.log(error));

//Clases con ES6
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA+this.valueB;
    }
}
const calc = new calculator();
console.log (calc.sum(2,3));

//import y export
import { hello } from './module';
hello();


//generator
function*happyHackingG(){
    if(true){
        yield 'Happy, ';//yield guarda el estado de forma interna
    }
    if(true){
        yield 'hacking';
    }
}
const generatorHackingG = happyHackingG();
console.log(generatorHackingG.next().value);
console.log(generatorHackingG.next().value);
console.log(generatorHackingG.next().value);
//un algoritmo muy comun con este metodo de generator, es el fibonacci
