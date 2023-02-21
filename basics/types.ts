//Tipos básicos

let nombre: string = "Marcelo"
let age: number = 16
let isSenior: boolean = false;
let person: Object = {}

let fruits: string[] = ["manzana", "pera"]

//Puede cambiar su tipo
let response: any = "Holaa";
response = 20;

//No retorna nada
function saludar(): void {
    console.log("Hola")
}

let response2: unknown;
response2 = true

let response3 = null;
let response4 = undefined;

//Combinación de tipos
type ResponseTypeService = string | undefined;
let response5: number | null;

let response6: ResponseTypeService;

//Type ASSERTION

let message: any = "Marcelo Morinigo";
let messageUppercase = (message as string).toUpperCase()
console.log(message)
console.log(messageUppercase)

const canvas = <HTMLCanvasElement>document.getElementById('canvas');