const sayHi = (name) => {
    console.log(`Hola ${name}`);
}


sayHi("Marcelo")

function sayGoodbye(name){
    console.log(`Adiós ${name}`);
}

sayGoodbye("Marcelo")

const response = {
    id: 1,
    name: "Marcelo",
    charge: "Developer",
    number: 4,
};

function show({name}: { id; name; charge; number }): number {
    console.log("El nombre mandado es:",name);
    return 1;
}

show(response)