/* Algoritmo con un condicional */

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

/*Algoritmo utilizando ciclo */
alert("hagamos la tabla de un numero");
let numero = parseInt(prompt("Ingrese un Nùmero"));
for (let i = 1; i<=10; i++){
let resultado = numero * i;
console.log( numero + " " + "multiplicado por " + i + " " + "es igual a" + " " + " " + " " + resultado);
}
alert("hemos terminado, mire la consola"); 


/* Simulador de calculo de IMC (Indice de Masa Corporal) */

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
}
