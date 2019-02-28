//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseInt(document.getElementById("ancho").value);
    var largo = parseInt(document.getElementById("largo").value);
    var perimetro = (ancho + largo)*2
    var alambre = perimetro*6

    alert ("Se necesitan "+alambre+" mts de alambre");
	
}

