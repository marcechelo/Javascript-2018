let arregloNumeros = [1, 2, 3, 4, 5];
let arregloDeudas = [32.45,342,3453,675,45.454];
//let arregloUsuarios: Array<UsuarioArreglo> = [
let arregloUsuarios: UsuarioArreglo[]= [
    {nombre:'marcelo',edad:28},
    {nombre:'marcelo',edad:10},
    {nombre:'marcelo',edad:70},
    {nombre:'marcelo',edad:32},
    {nombre:'marcelo',edad:25}];

let sumarDosNumeros = (numeroUno: number, numeroDos: number) => {
    return numeroUno + numeroDos;
};

let totalEdades = arregloDeNumeros => {
    //codigo
};

let facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};

let facultadesDos = (a?:number) => ['Facultad1', 'Facultad2'];

//operador
let sumar = 0;
arregloNumeros.forEach((valor, indice, arreglo) => {
    sumar = sumar + valor;
    console.log('valor',sumar);

    }
);

let resultadoDeLaSuma = arregloNumeros.reduce((totalAcumulado,valorArreglo)=>{
    return totalAcumulado - valorArreglo;
    },20
);

let resultadoDeLaSuma2 = arregloNumeros.reduce((totalAcumulado,valorArreglo)=>totalAcumulado - valorArreglo,20
);

//console.log('resultadoDeLaSuma', resultadoDeLaSuma2);

function calculoDeudasUsuario(edad:number) {
    return arregloDeudas.reduce((totalAcumulado, deuda:number)=>{return totalAcumulado + ((edad/100)*deuda)},0);
}

let usuariioConCincoAniosMenos = arregloUsuarios.map((usuario:UsuarioArreglo)=>{
    usuario.edad -= 5;
    usuario.deuda = calculoDeudasUsuario(usuario.edad);
    return usuario;
    }
).filter((usuario:UsuarioArreglo)=>{return usuario.deuda>100});

console.log(usuariioConCincoAniosMenos);


let resultadoArregloEdades = arregloUsuarios.reduce((totalEdadAcumulado,usuarioArreglo :UsuarioArreglo)=>{
        return totalEdadAcumulado + usuarioArreglo.edad;
    },20
);
//console.log(resultadoArregloEdades);

interface UsuarioArreglo {
    nombre:String;
    edad:number;
    deuda?:number;
}