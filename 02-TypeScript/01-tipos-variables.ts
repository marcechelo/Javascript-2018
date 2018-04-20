//var nombre = 'marcelo'; ya no sse usa var
let segundoNombre = 'ronnie'; //any permite volver a variable JavaScript
const cedula = '1715925739';
segundoNombre = 'algo';
//cedula = '1645'; error read-only
const URLS = 'http://epn.edu.ec';
//segundoNombre = 123; //duck typing

let nombre: String;
let edad: number = 22;
let fecha: Date = new Date();
let casado: boolean = false;

//let mascota: object = {};

class Usuario {
    public mNombre: String;
    private mEdad: number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        //Template String
        console.log(`el usuario se llama ${this.mNombre}, la edad es ${this.mEdad} y el numero de cedula esa ${this.mCedula}`);
    }

}

let usuario: Usuario = new Usuario('marcelo', 22, '1715925739');

let usarioOtro = {
    mNombre: 'marcelo',
    mEdad: 23
};

//console.log(usarioOtro)
//console.log(usuario.imprimirEnConsola());
//usuario.imprimirEnConsola();

interface UsuarioDos {
    mNombre: String;
    mEdad: number;
    mCedula: String;
    //imprimirEnConsola (nombre:String):void;
    //usuario:Usuario;

}

let usuarioCuatro: UsuarioDos;
usuarioCuatro = {
    mNombre: 'hola',
    mCedula: '1345',
    mEdad: 22
}

class UsuarioTres {
    constructor(public mNombre: String,
                private mEdad: number,
                protected mCedula: String) {

    }

}

