console.log(eval(new String("2 + aA")));
console.log(eval("2 + 2"));

// tipos de datos

    //tipo de datos: String
    var nombre1 = "camilo";

    //tipo de datos: numerico
    var numero= 25;

    //tipo de dato: booleano
    var bandera=true;

    //tipo de datos: symbol
    var simbolo=symbol("mi simbolo");

    //undefined
    var und;
    var u = undefined;

    // tipo de datos: objeto - objet
    var objeto = {
        nombre: "Norbey",
        apellido: "muñoz",
        telefono : 321321321
    }

    // array
    var autos = ['BMW', 'Audi', 'Volvo'];

    // nulo
    var y = null;

    function myfuncion(){

    }

    class persona{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    
// operadores
    // SUMA
    let a = 3;
    let b = 2;
    let z = a + b;

    //RESTA
    z = a - b;

    //MULTIPLICACIÓN
    z = a * b;

    //DIVISIÓN
    z = a / b;

    //MÓDULO
    z = a % b;

    //EXPONENTE
    z = a ** b;

    //variables 
    let x = 3, yy = 4;
    let sum = x + yy;

    // incremento
    // preincremento
    sum = ++x;

    // posincremento
    sum = yy++;

    // decremento
    // predecremento
    sum = --x;

    // posdecremento
    sum = yy--;


    // asignacion
    let an = 1;

    // asignacion compuesto
    an += 3; //an=an+3 
    an -= 2; //an=an-2
    an *= 5; //an=an*5
    an /= 3; //an=an/3
    an %= 2; //an=an%2
    an **= 2; //an=an**2

//operaciones de comparacion
    let aa = 3, bb = 2, cc = "3", dd = 3;
    //igualdad==, se revisa el valor sin importar el tipo
    let zz = (aa == bb);

    zz = (aa == cc);

    //igualdad estricta===, se revisa el valor importando el tipo
    zz = (aa === cc);

    /*operador distintoa:*/
    //distinto a 
    zz = (aa != cc); 

    //distinto a estricto
    zz = (aa !== cc);

//operaciones relacionales
    bb = 3;

    //menor
    zz = (aa < bb);

    //menor o igual
    zz = (aa<= bb);

    //mayor
    zz = (aa >= bb);

    //mayor o igual
    zz = (aa >= bb);


let resultado = (1 > 2) ?"verdadero" : "falso";

let resultad = (1 > 2)? "verdad" : 0;

let numero = 10;

resultad = ( numero % 2 == 0) ? "par" : "impar";


let p = 11;
let minimo = 0;
let maximo = 10;

//AND: se cumple cuando dos condiciones son verdaderas

if( p >= minimo && p <= maximo){
    console.log("el numero esta en el rango")
}
else{
    console.log("el numero esta fuera del rango")
}

//OR: se cumple cuando una o dos condiciones de dos es verdadera 

let vacaciones = false;
let diaDescanso = true;

if (vacaciones || diaDescanso ){
    console.log ("el padre puede asistir al juego del hijo");
}
else{
    console.log("el padre esta ocupado");
}