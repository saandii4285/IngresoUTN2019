function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("Desea continuar?: ");
	}while (respuesta == "s");

	promedio = acumular / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN