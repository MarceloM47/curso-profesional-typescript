var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi("Marcelo");
function sayGoodbye(name) {
    console.log("Adi\u00F3s ".concat(name));
}
sayGoodbye("Marcelo");
var response = {
    id: 1,
    name: "Marcelo",
    charge: "Developer",
    number: 4
};
function show(_a) {
    var name = _a.name;
    console.log("El nombre mandado es:", name);
    return 1;
}
show(response);
