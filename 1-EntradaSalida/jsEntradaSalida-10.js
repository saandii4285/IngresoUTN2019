/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{var importe;
 var descuento;
 var importeFinal;

importe = parseFloat(document.getElementById("importe").value);
descuento = importe * 25 / 100;
importeFinal = importe - descuento;

alert("El descuento afectuado es de $ " + descuento);
}
