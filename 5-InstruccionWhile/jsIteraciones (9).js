function Mostrar()
{

	var numero;
	var maximo;
	var minimo;
	var pregunta;
	var flag = 0;
	
	

do {
	numero = parseInt(prompt("Elija un numero"));
	
	while (isNaN(numero)) {
		numero = parseInt(prompt("Eso no es un numero, ingrese un numero"));
	}
	
	
	
	if (numero > maximo || flag == 0) {
		maximo = numero;
	}

	if (numero < minimo || flag == 0) {
		minimo = numero;
		flag = 1;
	}

 pregunta = confirm ("Quiere seguir ?");
} while(pregunta == true);
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;
	
		
	
	




}//FIN DE LA FUNCIÓN