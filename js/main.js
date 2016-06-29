var avion = {
	piloto : {
		nombre : "Erich Hartmann",
		codigo : "Senior",
		edad : 28
	},
	aeromoza : {
		nombre : "Audrey Hepburn",
		idiomas : ["Español", "Inglés", "Portugués"]
	},
	aerolinea : "LAN",
	marca : "Boeing 737",
	asientos : [
		{ numero: "1A", ocupado : false },
		{ numero: "1A", ocupado : false },
		{ numero: "2A", ocupado : true },
		{ numero: "2B", ocupado : false },
		{ numero: "3A", ocupado : true },
		{ numero: "3A", ocupado : true },
	],
	anho : 2014,
	primeraClase : true
}

var avionContainer = document.getElementById('avion-container')

/* 
-llamar al atributo asientos del objeto avion
-hacer un for de los asientos
-comprobar si estan dispobnibles
-su es falso, el asiento es verde
-colocar siento
*/
avionContainer.innerHTML = " ";
var asientos = avion.asientos;
var a;
for (var i = 0; i < asientos.length; i++) {
	a = document.createElement("div");
	a.innerHTML = asientos[i].numero;

	if (asientos[i].ocupado) {
		a.setAttribute("class", "rojo asiento");
	} else {
		a.setAttribute("class", "verde asiento");
	}
	avionContainer.appendChild(a);
}