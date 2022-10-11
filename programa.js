
let num;
let i;
let numeroIngresos;
class Usuario{
    constructor (nombre, edad, genero, altura, peso){
this.nombre = nombre;
this.edad = edad;
this.genero = genero;
this.altura = altura;
this.peso = peso;
    }
}

const usuariosTotales = [
    {
        nombre: "JUAN",
        edad: 28,
        genero: "Masculino",
        altura: 185,
        peso: 90,
    
    },
    {
        nombre: "MARIA",
        edad: 30,
        genero: "Femenino",
        altura: 168,
        peso: 70,
    
    }
    ];
/************inicio del simulador *********/
alert("Bien venido al Simuladdor de Selección de Acondicionamiento Físico");
alert("Hasta ahora estan ingresados dos voluntarios")
while(true){
let numeroIngresos = prompt("¿Cuantos Voluntarios serán ingresados ahora?   escriba un número ó ´fin´ para terminar");
if (!isNaN(numeroIngresos) && numeroIngresos != null && numeroIngresos != " "){
    /* numeroIngresos es un número y procedemos */
  for (let i=1 ; i <= numeroIngresos ; i++) {
  nombre = prompt("ingrese Nombre del Voluntario  " + i+":").toUpperCase();
 edad = parseInt(prompt("ingrese la edad"));
 genero = prompt("ingrese el género: utilice M para Masculino, F para Femenino u O para Otro").toUpperCase();
 if (genero === "M"){
    genero = "Masculino";
 }
 if (genero === "F"){
    genero = "Femenino"
 }
 altura = parseFloat(prompt("ingrese la  altura en cm"));
 peso = parseFloat(prompt("ingrese el peso en Kilogramos"));
 
      
 const usuario = new Usuario (this.nombre, this.edad, this.genero, this.altura, this.peso);
 console.log(usuario);
 
 usuariosTotales.push(usuario);
 console.log(usuariosTotales);

 
 }break;

}else if (numeroIngresos = "fin") {
    

    alert("Hasta Luego");
break;
}else{
    alert( "Introdujo valor incorrecto");

}continue;
 
}


/* verificamos la inclución de los nuevos ingresos a la Lista existente */
console.log(usuariosTotales);
/* se publica la cantidad de ingresados hasta el momento ( como no se tiene BD se toma solo los ingresados mas los existente en el Array cargado)*/
let ingresos = prompt("hasta el momento estan ingresado  " + usuariosTotales.length + " Usuarios" + " ¿Que quiere conocer de los ingresados:  Nombre, Edad, Genero, Altura, Peso? en caso contrario escriba Salir").toLowerCase();

switch (ingresos){
    case "nombre":
        for (const ingreso of usuariosTotales){
       console.log(ingreso.nombre);
        alert(ingreso.nombre);  
        }break;
    case "edad":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.edad + " años");
        alert(variable.nombre + "  " + variable.edad + " años");
        }break;
    case "genero":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.genero );
        alert(variable.nombre + "  " + variable.genero);
        }break;
    case "altura":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.altura + " cm");
        alert(variable.nombre + "  " + variable.altura + " cm");
        }break;
    case "peso":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.peso + " kg");
        alert(variable.nombre + "  " + variable.peso  + " kg");
        }break;
    default:
        alert("hemos terminado")
        break;
    }







/*Algoritmo con un condicional 

let numeroA = parseInt(prompt("ingrese un numero"));
let numeroB = parseInt(prompt("ingrese otro numero"));
if (numeroA > numeroB){
    alert(numeroA + " " + " es mayor que" + " " + numeroB)
}
else if(numeroA < numeroB){
    alert(numeroA + " " + " es menor que" + " " + numeroB)
}
else if(numeroA == numeroB){
    alert(numeroA + " " + " es igual que" + " "+ numeroB)
}
else {
    alert("las entradas deben ser numeros")
}

/*Algoritmo utilizando ciclo 
alert("hagamos la tabla de un numero");
let numero = parseInt(prompt("Ingrese un Nùmero"));
for (let i = 1; i<=10; i++){
let resultado = numero * i;
console.log( numero + " " + "multiplicado por " + i + " " + "es igual a" + " " + " " + " " + resultado);
}
alert("hemos terminado, mire la consola"); 


/* Simulador de calculo de IMC (Indice de Masa Corporal) 

alert("vamos a calcular su IMC");
let peso = prompt("ingrese su peso en Kg");
let estatura = prompt("ingrese su estatura en m");
function imc(a,b){
    return a/(b*b);
}
let imc2 = imc(peso,estatura);
alert("su IMC ="+ " "+ imc2);
if (imc2 <= 18.5){
console.log("Usted tiene bajo peso");
alert("Usted tiene bajo peso");
}
else if ((imc2 >=18.5) && (imc2 <= 24.9)){
    console.log("Usted tiene peso normal");
        alert("Usted tiene peso normal");
}
else if ((imc2 >= 25.0) && (imc2 <= 29.9)){
    console.log("Usted tiene sobre peso");
        alert("Usted tiene sobre peso");
}
else {
console.log("Usted está obreso");
alert("Usted está obeso");
}*/