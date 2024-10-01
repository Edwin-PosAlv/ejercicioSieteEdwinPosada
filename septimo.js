// Pedir al usuario las notas de las materias
let nota1 = parseFloat(prompt("Ten en cuenta que las calificaciones son de 0 a 100\nIngresa la nota de la materia 1:"));
let nota2 = parseFloat(prompt("Ten en cuenta que las calificaciones son de 0 a 100\nIngresa la nota de la materia 2:"));
let nota3 = parseFloat(prompt("Ten en cuenta que las calificaciones son de 0 a 100\nIngresa la nota de la materia 3:"));
let nota4 = parseFloat(prompt("Ten en cuenta que las calificaciones son de 0 a 100\nIngresa la nota de la materia 4:"));
let nota5 = parseFloat(prompt("Ten en cuenta que las calificaciones son de 0 a 100\nComo?Ingresa la nota de la materia 5:"));

let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;// calcular el promedio

let evaluacion;

if (nota1 < 60 || nota2 < 60 || nota3 < 60 || nota4 < 60 || nota5 < 60) {//  Ev rendimiento
    evaluacion = "Reprobado";
} else if (promedio >= 90) {
    evaluacion = "Sobresaliente";
} else if (promedio >= 70 && promedio < 90) {
    evaluacion = "Rendimiento Satisfactorio";
} else if (promedio >= 60 && promedio < 70) {
    evaluacion = "Regular";
}

console.log("El promedio es: " + promedio.toFixed(2));// mostrar el promedio y la evaluación
console.log("Evaluación final: " + evaluacion);
