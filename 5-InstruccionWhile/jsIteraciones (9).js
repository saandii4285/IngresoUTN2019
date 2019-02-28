function Mostrar()
{
var maximo;
var minimo;
var numero;
var contador=0;
var respuesta="s"

do {
	numero = parseInt(prompt("Ingrese numero: "));

	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

	}

	if(numero > maximo || flag == 0 ) {
		maximo = numero;
	}

	if (numero < minimo || flag == 0 ) {
		minimo = numero;
		flag = 1;
	}
	respuesta = prompt("Desea continuar?: ");
} while (respuesta == "s" || respuesta == "s");





}//FIN DE LA FUNCIÓN