function Mostrar()
{
//tomo la edad  
var edad;
var estadocivil;

edad = parseInt(document.getElementById("edad").value);
estadocivil = document.getElementById("estadoCivil").value;
if ( edad < 18 && estadocivil !="Soltero" )
{
    alert("Es muy pequeño para No ser soltero");

}

	


}//FIN DE LA FUNCIÓN