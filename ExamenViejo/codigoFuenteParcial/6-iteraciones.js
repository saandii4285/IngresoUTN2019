//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importes;
    var diaMax;
    var diaMin;
    var importeMaximo; 
    var importeMinimo;  
    
    
    for(var i =1;i<=7;i++) {
        importes = parseInt(prompt("Ingrese el importe de las ventas del dia "+i));

        while(importes < 0 || isNaN(importes)) {
            importes = parseInt(prompt("ERROR,eso no es un importe. Por favor ingrese el importe de las ventas"));
        }
        if (importes > importeMaximo) {
            importeMaximo = importes;
            diaMax=i;
        }else if (importes < importeMinimo) {
            importeMinimo = importes;
            diaMin=i;
        }
        
    }
	
}   alert ("El importe maximo fue de $ "+ importeMaximo+ " el dia "+diaMax + "/nEl importe minimo fue de $ "+ importeMinimo+" el dia "+diaMin);

