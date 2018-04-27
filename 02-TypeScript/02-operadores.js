var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [32.45, 342, 3453, 675, 45.454];
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios = [
    { nombre: 'marcelo', edad: 28 },
    { nombre: 'marcelo', edad: 10 },
    { nombre: 'marcelo', edad: 70 },
    { nombre: 'marcelo', edad: 32 },
    { nombre: 'marcelo', edad: 25 }
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    //codigo
};
var facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
var facultadesDos = function (a) { return ['Facultad1', 'Facultad2']; };
//operador
var sumar = 0;
arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log('valor', sumar);
});
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
var resultadoDeLaSuma2 = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) { return totalAcumulado - valorArreglo; }, 20);
//console.log('resultadoDeLaSuma', resultadoDeLaSuma2);
function calculoDeudasUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) { return totalAcumulado + ((edad / 100) * deuda); }, 0);
}
var usuariioConCincoAniosMenos = arregloUsuarios.map(function (usuario) {
    usuario.edad -= 5;
    usuario.deuda = calculoDeudasUsuario(usuario.edad);
    return usuario;
}).filter(function (usuario) { return usuario.deuda >  | 100; });
console.log(usuariioConCincoAniosMenos);
var resultadoArregloEdades = arregloUsuarios.reduce(function (totalEdadAcumulado, usuarioArreglo) {
    return totalEdadAcumulado + usuarioArreglo.edad;
}, 20);
