/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var producto1;
var producto2;
var producto3;
function Sumar () 
{
  var suma
  producto1 = document.getElementById("PrecioUno").value;
  producto1 = parseInt(producto1);
  producto2 = document.getElementById("PrecioDos").value;
  producto2 = parseInt(producto2);
  producto3 = document.getElementById("PrecioTres").value;
  producto3 = parseInt(producto3);


  suma = producto1 + producto2 + producto3;

  alert ("La suma de sus productos es "+suma);
  


}
function Promedio () 
{
    var promedio 
    producto1 = document.getElementById("PrecioUno").value;
    producto1 = parseFloat(producto1);
    producto2 = document.getElementById("PrecioDos").value;
    producto2 = parseFloat(producto2);
    producto3 = document.getElementById("PrecioTres").value;
    producto3 = parseFloat(producto3);

    promedio = (producto1+producto2+producto3)/3;

    alert ("El promedio es "+ promedio.toFixed(2));




}
function PrecioFinal () 
{
    var PrecioFinal
    var iva 

    producto1 = document.getElementById("PrecioUno").value;
    producto1 = parseFloat(producto1);
    producto2 = document.getElementById("PrecioDos").value;
    producto2 = parseFloat(producto2);
    producto3 = document.getElementById("PrecioTres").value;
    producto3 = parseFloat(producto3);

    
    PrecioFinal = producto1+producto2+producto3;
    PrecioFinal = parseFloat (PrecioFinal);
    PrecioFinal.toFixed (2);
    iva = PrecioFinal * 21/100;
    

    alert ("El total es "+ (PrecioFinal + iva).toFixed(2) + " incluyendo IVA (21%)");


    
    

}