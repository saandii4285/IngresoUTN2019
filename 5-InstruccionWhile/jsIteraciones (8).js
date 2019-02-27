function Mostrar()
{


	var positivo=0;
	var negativo=1;
	var numero;
	var flag = 0;
	
	var respuesta='si';

	do {
		numero =parseInt(prompt("Escoja un numero"));
		while (isNaN(numero)){
			numero = parseInt(prompt("ERROR, elija un numero"));
		}

		if (numero > 0) {
			positivo = positivo + numero;
		} else {
			negativo = negativo * numero;
			flag = 1;
		}
		

		respuesta = confirm("Quiere seguir ?");

		

		


	} while (respuesta == true);


document.getElementById('suma').value=positivo;
if (flag == 0) {
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN