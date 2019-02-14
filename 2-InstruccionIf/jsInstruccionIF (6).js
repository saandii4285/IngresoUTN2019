function Mostrar()
{
//tomo la edad
var edad

edad = parseInt(document.getElementById("edad").value);

if (edad < 13) {
    alert ("Es un niño")
} else if (edad < 18) {
    alert ("Es un adolecente")
} else if (edad <70) {
    alert ("Es un adulto")
} else {
    alert ("Es un anciano")
}







}//FIN DE LA FUNCIÓN
