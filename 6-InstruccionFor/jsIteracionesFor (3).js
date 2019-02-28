function Mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");

while (isNaN(repeticiones)) {

    repetciones = parseInt(prompt("Eso no es un numero. Ingrese el numero: "));

}

for ( var i =0 ; 1 < repetciones ; i++){
    console.log("Hola UTNFRA");
}



}//FIN DE LA FUNCIÓN