var nombre = "22";
var edad = 22;
var fecha = new Date();
var casado = false;//true
var casa = undefined;
var carro = null;
var arreglo = [1, "hola", fecha, true, casa, sumarDosNumeros(1, 2), usuario];//arreglo

function sumarDosNumeros(numero1, numero2) {
    return numero1 + numero2;
}

var sumarDosNumerosVersionDos = function (numero1, numero2) {
    return numero1 + numero2;
};

function sumarDosNumeros(numero1, numero2) {
    return numero1 + numero2;
}

var usuario = { //Objeto
    "nombre": "Marcelo",
    apellido: "Nieto",
    cedula: '1715925739',
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido);
    },
    imprimirEnConsola: sumarDosNumerosVersionDos
};

/*console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.cedula);
console.log(usuario.imprimir());
console.log(usuario.imprimirEnConsola(1, 2));*/

for (var aux = 0; aux < 10; aux++){
    console.log('aux: ',aux);
}


//console.log("Usuario",usuario);
/*console.log(casa?"verdadero":"falso"); //if rapido
console.log(carro?"verdadero":"falso");
console.log(arreglo?"verdadero":"falso");
console.log(1?"verdadero":"falso");
console.log(0?"verdadero":"falso");
console.log(-1?"verdadero":"falso");*/
//console.log(fecha);

/*if (nombre === edad) {
    console.log("verdadero");
} else {
    console.log("falso");
}*/