function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while( contador < 5 ) {

		numero = parseInt(prompt("ingrese un numero: "));

		while( isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

		}

		acumulador = acumulador + numero;
		contador++;
	}
	promedio = acumulador / 5

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN