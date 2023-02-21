class Animal {
    //Todos pueden acceder a ella
    public name: "Generic animal";
    //Solo puede acceder la clase
    private age = 10;
    //Solo pueden acceder a ella la clase principal y sus herederos
    protected identity = "lll";

    constructor(){
        //Si requiere hacer alguna operacion antes de crear una nueva instancia
    }

    sayHi(){
        console.log("Grrr")
    }
}

class Dog extends Animal {
    type: "Pastor alemán";

    constructor(){
        //Llamar primero a la clase heredada
        super();
    }

    sayHi(){
        this.identity;
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();