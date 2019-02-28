function Mostrar()
{  
    var i;
    var pregunta;
    pregunta = parseInt(prompt("Elija un numero"));

    for(  ;  ;  ){     
        pregunta = parseInt(prompt("Elija un numero"));
        while (isNaN(pregunta)){
        pregunta = parseInt(prompt("Error,Elija un numero"));
        }
        if (pregunta==9) {
            break;
        }
    }





}//FIN DE LA FUNCIÓN