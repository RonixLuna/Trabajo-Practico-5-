// Pedir números al usuario
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pedir operación
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let resultado;

// Estructura condicional compuesta
if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        alert("Error: no se puede dividir por cero");
    }
} else {
    alert("Operación no válida");
}

// Mostrar resultado (solo si existe)
if (resultado !== undefined) {
    alert("El resultado es: " + resultado);
}