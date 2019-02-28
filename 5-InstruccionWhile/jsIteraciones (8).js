function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var flag;

	do{
		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if (numero >= 0){
			positivo = positivo + numero;
		}
		else{
			negativo = numero * negativo;
			flag = 1;
		}

		respuesta = prompt("Desea continuar?: ");
	} while (respuesta == "s" || respuesta == "s");

document.getElementById('suma').value=positivo;
if(flag == 0){
	negativo = 0;
}
document.getElementById('promedio').value=negativo;

}//FIN DE LA FUNCIÓN