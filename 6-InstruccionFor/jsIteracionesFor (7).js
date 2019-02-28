function Mostrar()
{
var numeros;
  
  numero = parseInt(prompt("Ingrese un numero positivo: "));

  while( numero <= 0 || isNaN(numero)){
      numero = parseInt(prompt("Error. Ingrese numero positivo; "));
  }

  for( var i=1; i <= numero; i++){

      if(numero % i == 0){
          //contarlo y mostrarlo
          contador++;
          console.log(i);
      }

  }

  console.log("Cantidad de divisores: " + contador);




}//FIN DE LA FUNCIÓN