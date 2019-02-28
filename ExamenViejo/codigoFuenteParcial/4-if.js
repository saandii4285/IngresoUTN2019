//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1= parseInt(prompt("Elija el primer numero"));
    while(numero1 < 0||isNaN(numero1)){
        numero1= parseInt(prompt("Error,elija el primer numero"));
    }
    var numero2= parseInt(prompt("Elija el segundo numero"));
    while (numero2 < 0|| isNaN(numero2)){
        var numero2= parseInt(prompt("Error,elija el segundo numero"));
    }





    if (numero1 == numero2) {
       document.write("El resultado de la multiplicación es: "+(numero1 * numero2));
    } else if (numero1 > numero2) {
        document.write("El resultado de la resta es: "+(numero1 - numero2));
    }else {
        document.write("El resultado de la suma es: " +(numero1 + numero2));
    }

    

}

