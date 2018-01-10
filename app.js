"use strict";
<<<<<<< HEAD
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "tarde");
=======
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var mifuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var mifuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var nombre = "pedro";
var hulk = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
>>>>>>> 2ceab9b0df0f1dfb6c5dd5062396ebe3178c6c15
//# sourceMappingURL=app.js.map