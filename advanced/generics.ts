interface MyInterface<T> {
    field: T;
}

const  myValue: MyInterface<number> = {
    field: 6
}

class MyClass<T> {
    field: T;

    constructor(field: T){
        this.field = field;
    }
}