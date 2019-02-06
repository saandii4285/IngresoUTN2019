/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var name1;
    var age1;
    

    document.getElementById("elNombre").value = name1;
    document.getElementById("laEdad").value = age1;

    alert("Usted se llama "+ name1 + " y tiene "+ age1 +" años");
}

