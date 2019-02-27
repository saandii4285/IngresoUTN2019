function Mostrar()
{

	var contador=0;
	var numero;
	var pregunta;
	var negativo = 0;
	var positivo = 0;
	var contadorCeros= 0;
	var contadorNegativo = 0;
	var contadorPositivo = 0;

	do {
		numero = parseInt(prompt("Elija un numero"));
		
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, ingrese un numero"));			
		
		}
		if (numero < 0) {
			negativo = negativo + numero;
			contadorNegativo++;

		} else if (numero > 0) {
			positivo = positivo + numero;
			contadorPositivo++;
		} else {
		contadorCeros++;
		}

		



		
		
		
		
		
		
		
		
		
		
		pregunta = confirm ("Quiere seguir ?");
	} while(pregunta == true);
	





}//FIN DE LA FUNCIÓN