/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var anchoTerreno
var largoTerreno
var radioTerreno
var alambre
function Rectangulo () 
{
anchoTerreno = parseInt(document.getElementById("Ancho").value);
largoTerreno = parseInt(document.getElementById("Largo").value);
radioTerreno = parseInt(document.getElementById("Radio").value);

alambre = (anchoTerreno+largoTerreno)*3

alert ("La cantidad de alambre que necesita es "+ alambre);

}
function Circulo () {
radioTerreno = parseInt(document.getElementById("Radio").value);
alambre = radioTerreno * 3

alert ("La cantidad de alambre que necesita es "+ alambre);
} 

function Materiales () 
{
var cal
var cemento 
var contrapiso  
anchoTerreno = parseInt(document.getElementById("Ancho").value);
largoTerreno = parseInt(document.getElementById("Largo").value);

contrapiso = (anchoTerreno+largoTerreno)
cal = contrapiso / 3
cemento = contrapiso / 2

alert ("Usted necesita "+cal+" bolsas de cal y "+cemento+" bolsas de cemento" );

}