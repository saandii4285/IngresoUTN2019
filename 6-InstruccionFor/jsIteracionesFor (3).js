function Mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");

while (isNaN(repeticiones)) {

    repeticiones = parseInt(prompt("Eso no es un numero. Ingrese el numero: "));

}

for ( var i =0 ; 1 < repeticiones ; i++){
    console.log("Hola UTNFRA");
}



}//FIN DE LA FUNCIÓN