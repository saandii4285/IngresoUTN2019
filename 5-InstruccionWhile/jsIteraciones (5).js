function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
//var sexo =prompt("ingrese f ó m.").ToLowerCase();

//while (!(sexo =="f"||sexo=="m"))
while (sexo !="f" && sexo !="m" && sexo !="M" && sexo != "F") {
    sexo = prompt ("Error, ingrese su sexo");
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN