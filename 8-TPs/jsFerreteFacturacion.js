/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 var precio1;   
 var precio2;
 var precio3;
 var suma;

precio1 =parseFloat(docuemet.getElementById("PrecioUno").value);
precio2 =parseFloat(document.getElementById("PrecioDos").value);
precio3 =parseFloat(document.getElementById("PrecioTres").value);
suma = precio1 + precio2 + precio3;

alert("la suma de los precios es $ " + suma);

	
}
function Promedio () 
{
 var precio1;
 var precio2;
 var precio3;
 var promedio;
 
 precio1 = parseFloat(document.getElementById("PrecioUno").value);
 precio2 = parseFloat(document.getElementById("PrecioDos").value);
 precio3 = parseFloat(document.getElementById("PrecioDos").value);
 promedio = (precio1 + precio2 + precio3) / 3;

 alert("el promedio de los precios es $ " + promedio);


	
}
function PrecioFinal () 
{
 var precio1;
 var precio2;
 var precio3;
 var importeFinal;
 var iva;
 var importeconiva;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);
importeFInal = precio1 + precio2 + precio3;
iva = importefinal *21 / 100
importeconiva = importefinal + iva;
alert("el resultado final es $ " + importeconiva);



	
}