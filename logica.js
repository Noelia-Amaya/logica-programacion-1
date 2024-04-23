var miArray = [];

let i = 0;

//Debe solicitar al usuario 3 números y guardarlos

while(i < 3) {
  let num = parseInt(prompt("Ingrese un numero: " + (i+1)));
  miArray.push(num);
  i++;
}

console.log("Este es mi arreglo: " + miArray);
console.log("--------------------------------------------");

//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

if (miArray[0] >= miArray[1] && miArray[0] >= miArray[2]) {
    if (miArray[1] >= miArray[2]) {
        console.log("El número mayor es: " + miArray[0]);
        console.log("El número del centro es: " + miArray[1]);
        console.log("El número menor es: " + miArray[2]);
    } else {
        console.log("El número mayor es: " + miArray[0]);
        console.log("El número del centro es: " + miArray[2]);
        console.log("El número menor es: " + miArray[1]);
    }
} else if (miArray[1] >= miArray[0] && miArray[1] >= miArray[2]) {
    if (miArray[0] >= miArray[2]) {
        console.log("El número mayor es: " + miArray[1]);
        console.log("El número del centro es: " + miArray[0]);
        console.log("El número menor es: " + miArray[2]);
    } else {
        console.log("El número mayor es: " + miArray[1]);
        console.log("El número del centro es: " + miArray[2]);
        console.log("El número menor es: " + miArray[0]);
    }
} else {
    if (miArray[0] >= miArray[1]) {
        console.log("El número mayor es: " + miArray[2]);
        console.log("El número del centro es: " + miArray[0]);
        console.log("El número menor es: " + miArray[1]);
    } else {
        console.log("El número mayor es: " + miArray[2]);
        console.log("El número del centro es: " + miArray[1]);
        console.log("El número menor es: " + miArray[0]);
    }
}

//Debe imprimir los números ordenados de mayor a menor
console.log("--------------------------------------------");

function imprimirNumMayorMenor() {
    for (let i = 0; i < miArray.length - 1; i++) {
        let numMaximo = i;
        for (let j = i + 1; j < miArray.length; j++) {
            if (miArray[j] > miArray[numMaximo]) {
                numMaximo = j;
            }
        }
    
        if (numMaximo !== i) {
            let temp = miArray[i];
            miArray[i] = miArray[numMaximo];
            miArray[numMaximo] = temp;
        }
    }
    console.log("Los números ordenados de mayor a menor son: " + miArray.join(", "));
}

imprimirNumMayorMenor();

//Debe imprimir los números ordenados de menor a mayor.
console.log("--------------------------------------------");

function imprimirNumMenorMayor() {
    for (let i = 0; i < miArray.length - 1; i++) {
        let numMinimo = i; 
        for (let j = i + 1; j < miArray.length; j++) {
            if (miArray[j] < miArray[numMinimo]) { 
                numMinimo = j;
            }
        }
    
        if (numMinimo !== i) {
            let temp = miArray[i];
            miArray[i] = miArray[numMinimo];
            miArray[numMinimo] = temp;
        }
    }
    console.log("Los números ordenados de menor a mayor son: " + miArray.join(", "));
}

imprimirNumMenorMayor();

//Debe ser capaz de identificar si los números son iguales e imprimir un 
//mensaje diciendo que los números son iguales.
console.log("--------------------------------------------");
if (miArray[0] === miArray[1] && miArray[0] === miArray[2]){
    console.log("Los tres numeros ingresados son iguales");
} else if (miArray[0] === miArray[1] || miArray[0] === miArray[2] || miArray[1] === miArray[2]){
    console.log("Hay dos numeros que son iguales");
} else {
    console.log("Todos los numeros son diferentes, no hay ningun numero igual a otro numero");
}





