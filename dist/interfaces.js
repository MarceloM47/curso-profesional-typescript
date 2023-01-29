var _a;
var person = {
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: 'Hola',
    sayHello: function () {
        return "Hola";
    }
};
person.code = 50;
var secondPerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () { return "Hola 2"; }
};
(_a = secondPerson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
