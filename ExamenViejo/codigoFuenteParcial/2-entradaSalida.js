//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero = parseInt(prompt("Ponga su valor"));
    var precioFinal

    
    if(numero <=0 || isNaN(numero)) {
        alert ("Eso no es un numero valido");
    }
    else {
        precioFinal = numero + (numero*21/100);
        document.getElementById("importe").value = precioFinal
        

    }

}

