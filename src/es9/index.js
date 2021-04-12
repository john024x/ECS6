//operador de reposo para extraer propiedades de un objeto que todavia no se ha construido
const obj = {
    name: 'Juan',
    age: 22,
    country: 'MX'
};
let {name,...all} = obj;//extraigo del objeto el primer valor, y dejo los demas
console.log(name, all);

//merge objects
const nameObj = {
    name: 'Juan',
};
const countryObj = {
    ...nameObj,
    country: 'MX',
};
console.log(countryObj);


//promise undefined
const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)?setTimeout(() => resolve ('Hello world',30000)):reject(new Error('test error'))
    });
};
helloWorld().finally(() => console.log('finalizado'));


//mejoras sobre Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-04-09');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);