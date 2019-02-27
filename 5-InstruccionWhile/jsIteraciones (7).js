function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var numero;
	var pregunta;

while (respuesta){
	numero = parseInt(prompt("Elija un numero").value);
	contador = contador + 1
	acumulador = acumulador + numero



	
}
document.getElementById("suma").value = acumulador
document.getElementById("promedio").value = acumulador / contador

}//FIN DE LA FUNCIÓN