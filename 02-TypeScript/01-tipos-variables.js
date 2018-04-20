//var nombre = 'marcelo'; ya no sse usa var
var segundoNombre = 'ronnie'; //any permite volver a variable JavaScript
var cedula = '1715925739';
segundoNombre = 'algo';
//cedula = '1645'; error read-only
var URLS = 'http://epn.edu.ec';
//segundoNombre = 123; //duck typing
var nombre;
var edad = 22;
var fecha = new Date();
var casado = false;
//let mascota: object = {};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template String
        console.log("el usuario se llama " + this.mNombre + ", la edad es " + this.mEdad + " y el numero de cedula esa " + this.mCedula);
    };
    return Usuario;
}());
var usuario = new Usuario('marcelo', 22, '1715925739');
console.log(usuario);
//usuario.imprimirEnConsola();
