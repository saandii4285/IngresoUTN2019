/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var celsius
var fahrenheit
var temperatura
function FahrenheitCentigrados () 
{
fahrenheit = parseFloat(document.getElementById("Temperatura").value);

temperatura = ((fahrenheit-32)*5/9).toFixed(1);
alert (fahrenheit+"°F son "+temperatura+"°C");
}

function CentigradosFahrenheit () 
{
celsius = parseFloat(document.getElementById("Temperatura").value);
temperatura = ((celsius*9/5)+32).toFixed(1);
alert (celsius+"°C son "+temperatura+"°F");
}
