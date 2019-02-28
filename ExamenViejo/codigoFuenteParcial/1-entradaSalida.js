//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var numero = parseInt(document.getElementById("lado").value);
var calculo
if(numero < 0 || isNaN(numero)) {
   alert("Error, eso no es un numero positivo"); 
}
else {
calculo = numero * 3;
alert ("El perímetro es: "+calculo);
}
	

	
}

