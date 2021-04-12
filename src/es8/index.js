const data = {
    frontend: 'Juan',
    backend: 'Jose',
    design: 'Roxana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const values = Object.values(data);
console.log(values);
console.log(values.length);


//padding
const string = "980";
console.log(string.padStart(16,'0'));
console.log(string.padEnd(16,'1'));

//ASYNC AWAIT
const happyHackingBro = () =>{
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Happy Hacking',3000))
            :reject(new Error('Test error'));
    })
};
const hackingAsync = async() =>{
    const hacking = await happyHackingBro();
    console.log(hacking);
}
hackingAsync();

//para el manejo de errores en ES()
const anotherFunction = async () =>{
    try {
        const hacking = await happyHackingBro();
        console.log(hacking);
    } catch (error) {
        console.log(error)
    }
}
anotherFunction();