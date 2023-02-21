class Animal {
    name: "Generic animal";
    private age = 10;

    sayHi(){
        console.log("Grrr")
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();