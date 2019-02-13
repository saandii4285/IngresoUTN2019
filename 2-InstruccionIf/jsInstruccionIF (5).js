function Mostrar()
{
//tomo la edad  
var edad
edad = parseInt(document.getElementById("edad").value);

if (edad >18) {

    alert("Usted no es adolecente");

} else if (edad <13) {

    alert("Usted todavia no es adolecente");

} else {

    alert("Usted es adolecente");
}

    


}//FIN DE LA FUNCIÓN