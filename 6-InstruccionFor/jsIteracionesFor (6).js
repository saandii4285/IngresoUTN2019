function Mostrar()
{
var i;
var contadorPar=0
var numero = parseInt(prompt("Elija un numero"));
while (numero < 1||isNaN(numero)) {
    numero = parseInt(prompt("ERROR,Elija un numero"));
} 
for (var i = 1; i <=numero;i++) {
    if (i%2==0){
    contadorPar=contadorPar+1;
    console.log(i);
    }
}
console.log("Cantidad de pares: "+ contadorPar);



}//FIN DE LA FUNCIÓN