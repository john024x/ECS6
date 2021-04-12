let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));//el parametro que recibe es la profundidad del arreglo


let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value,value*2])) //va a mapear cada elemento


//permite eliminar los espacios en blanco de un string
let hello = '           happy hacking';
console.log(hello);
console.log(hello.trimStart());
let hello2 = 'happy hacking                  ';
console.log(hello2);
console.log(hello2.trimEnd());

//optional catch 
try {
    
} catch (error) {//ahora error ya no es necesario ponerlo aqui, ya estara disponible por default
    
}

//from entries, trasnforma llave valor a objeto
let entries = [["name","juan"],["age","22"]];
console.log (Object.fromEntries(entries));//devuelve el objeto contruido con llave valor

//objeto de tipo simbolo
let mySymbol = `My simbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);