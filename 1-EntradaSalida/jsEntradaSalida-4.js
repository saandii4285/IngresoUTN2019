/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var name;
	name = prompt ("Su Nombre");
	document.getElementById("elNombre").value = name
	
}

