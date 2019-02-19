function Mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if ( edad >= 13 && edad <= 17 )
{
    alert("Usted es adolescente");
}

if ( edad < 13)

{
    alert("Usted es un niño");
}

if ( edad >= 18 )

{
    alert("Usted es mayor");

}





}//FIN DE LA FUNCIÓN
