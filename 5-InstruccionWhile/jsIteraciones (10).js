function Mostrar()
{
var numero;
var respuesta;
var acumuladorPos = 0;
var acumuladorNeg = 0;
var contadorPos = 0;
var contadorNeg = 0;
var contadorCeros = 0;
var contadorPares = 0;
var promPos = 0;
var promNeg = 0;
var diferencia;

do {
	numero = parseInt(prompt("Ingrese numero: "));

	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

	}

	if (numero > 0) {

		acumuladorPos += numero;
		contadorPos++;

	} else if (numero < 0) {
		acumuladorNeg += numero;
		contadorNeg++;

}else {
	contadorCeros++;
}

if (numero % 2 == 0) {
	contadorPares++;
}

respuesta = prompt("Desea continuar?: ");
} while (respuesta == "s" || respuesta == "s");

if (contadorPos != 0) {
	promPos = acumuladorPos / contadorPos;
} 

if (contadorNeg != 0) {
	promNeg = acumuladorNeg / contadorNeg;
} 

diferencia = contadorPos - contadorNeg;

document.write("1-Suma de los negativos: " + acumuladorNeg + "<br>");
document.write("2-Suma de los positivos: " + acumuladorPos + "<br>");
document.write("3-cantidad de los positivos: " + contadorPos + "<br>");
document.write("4-cantidad de los negativos: " + contadorNeg + "<br>");
document.write("5-cantidad de ceros: " + contadorCeros + "<br>");
document.write("6-cantidad de numeros pares: " + contadorPares + "<br>");
document.write("7-promedio de positivos.: " + promPos + "<br>");
document.write("8-promedio de negativos: " + promNeg + "<br>");
document.write("9-diferencia entre positivos y negativos, (positivos-negativos): " + diferencia + "<br>");



}//FIN DE LA FUNCIÓN