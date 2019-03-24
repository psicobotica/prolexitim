var email = null;
var codigo = null;
var csv_row = ""; 
var sep = ",";
var tiempo = 0; 

function welcome() {
alert("Bienvenido al test TAS20");
}

/* La función evaluarTAS se llama una vez comprobada que todas las preguntas están respondidas y calcula los coeficientes asociados a dichas respuestas.
 Devuelve dichos coeficientes en un array. */


function getEmail() {
	while (email == null || email == "") {
		email = prompt("Introduce tu dirección de correo electrónica. Este formulario es totalmente anónimo.");
	}
}

function genCode() {
	codigo = md5(email);
}
	

 function evaluarTAS () {

 	var respuestaF1_1 = parseInt(document.tas.questionF1_1.value);
	var respuestaF2_2 = parseInt(document.tas.questionF2_2.value);
	var respuestaF1_3 = parseInt(document.tas.questionF1_3.value);
	var respuestaF2_4 = parseInt(document.tas.questionF2_4.value);
	var respuestaF3_5 = parseInt(document.tas.questionF3_5.value);
	var respuestaF1_6 = parseInt(document.tas.questionF1_6.value);
	var respuestaF1_7 = parseInt(document.tas.questionF1_7.value);
	var respuestaF3_8 = parseInt(document.tas.questionF3_8.value);
	var respuestaF1_9 = parseInt(document.tas.questionF1_9.value);
	var respuestaF3_10 = parseInt(document.tas.questionF3_10.value);
	var respuestaF2_11 = parseInt(document.tas.questionF2_11.value);
	var respuestaF2_12 = parseInt(document.tas.questionF2_12.value);
	var respuestaF1_13 = parseInt(document.tas.questionF1_13.value);
	var respuestaF1_14 = parseInt(document.tas.questionF1_14.value);
	var respuestaF3_15 = parseInt(document.tas.questionF3_15.value);
	var respuestaF3_16 = parseInt(document.tas.questionF3_16.value);
	var respuestaF2_17 = parseInt(document.tas.questionF2_17.value);
	var respuestaF3_18 = parseInt(document.tas.questionF3_18.value);
	var respuestaF3_19 = parseInt(document.tas.questionF3_19.value);
	var respuestaF3_20 = parseInt(document.tas.questionF3_20.value);

	// Se construye una variable para cada tipo de puntuación:
	
	var puntosF1 = 0;
	puntosF1 = respuestaF1_1 + respuestaF1_3 + respuestaF1_6 + respuestaF1_7 + respuestaF1_9 + respuestaF1_13 + respuestaF1_14;

	var puntosF2 = 0;
	puntosF2 = respuestaF2_2 + respuestaF2_4 + respuestaF2_11 + respuestaF2_12 + respuestaF2_17;

	var puntosF3 = 0;
	puntosF3 = respuestaF3_5 + respuestaF3_8 + respuestaF3_10 + respuestaF3_15 + respuestaF3_16 + respuestaF3_18 + respuestaF3_19 + respuestaF3_20;

	// Se almacena la puntuación total en una variable:

	var total = puntosF1 + puntosF2 + puntosF3;

	// Se crea un array con las puntuaciones:
	
	var puntuaciones = [total, puntosF1, puntosF2, puntosF3];

	return puntuaciones;


 }

 /* La función check() comprueba que se han contestado todas las preguntas del TAS. De no ser así aparece una alarma, en caso contrario muestra los resultados por pantalla.
 Además devuelve una lista con los cuatro resultados clave del TAS (total, F1, F2, F3 */

function check() {

//	Se almacenan las respuestas en variables:

	var respuestaF1_1 = parseInt(document.tas.questionF1_1.value);
	var respuestaF2_2 = parseInt(document.tas.questionF2_2.value);
	var respuestaF1_3 = parseInt(document.tas.questionF1_3.value);
	var respuestaF2_4 = parseInt(document.tas.questionF2_4.value);
	var respuestaF3_5 = parseInt(document.tas.questionF3_5.value);
	var respuestaF1_6 = parseInt(document.tas.questionF1_6.value);
	var respuestaF1_7 = parseInt(document.tas.questionF1_7.value);
	var respuestaF3_8 = parseInt(document.tas.questionF3_8.value);
	var respuestaF1_9 = parseInt(document.tas.questionF1_9.value);
	var respuestaF3_10 = parseInt(document.tas.questionF3_10.value);
	var respuestaF2_11 = parseInt(document.tas.questionF2_11.value);
	var respuestaF2_12 = parseInt(document.tas.questionF2_12.value);
	var respuestaF1_13 = parseInt(document.tas.questionF1_13.value);
	var respuestaF1_14 = parseInt(document.tas.questionF1_14.value);
	var respuestaF3_15 = parseInt(document.tas.questionF3_15.value);
	var respuestaF3_16 = parseInt(document.tas.questionF3_16.value);
	var respuestaF2_17 = parseInt(document.tas.questionF2_17.value);
	var respuestaF3_18 = parseInt(document.tas.questionF3_18.value);
	var respuestaF3_19 = parseInt(document.tas.questionF3_19.value);
	var respuestaF3_20 = parseInt(document.tas.questionF3_20.value);

	var todorespondido = true;


	if (Number.isNaN(respuestaF1_1)) {
		alert("No has respondido a la pregunta 1.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF2_2)) {
		alert("No has respondido a la pregunta 2.");
		todorespondido = false;
	}else if (Number.isNaN(respuestaF1_3)) {
		alert("No has respondido a la pregunta 3.");
		todorespondido = false;
	}else if (Number.isNaN(respuestaF2_4)) {
		alert("No has respondido a la pregunta 4.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_5)) {
		alert("No has respondido a la pregunta 5.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_6)) {
		alert("No has respondido a la pregunta 6.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_7)) {
		alert("No has respondido a la pregunta 7.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_8)) {
		alert("No has respondido a la pregunta 8.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_9)) {
		alert("No has respondido a la pregunta 9.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_10)) {
		alert("No has respondido a la pregunta 10.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF2_11)) {
		alert("No has respondido a la pregunta 11.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF2_12)) {
		alert("No has respondido a la pregunta 12.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_13)) {
		alert("No has respondido a la pregunta 13.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_14)) {
		alert("No has respondido a la pregunta 14.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_15)) {
		alert("No has respondido a la pregunta 15.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_16)) {
		alert("No has respondido a la pregunta 16.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF2_17)) {
		alert("No has respondido a la pregunta 17.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_18)) {
		alert("No has respondido a la pregunta 18.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_19)) {
		alert("No has respondido a la pregunta 19.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF3_20)) {
		alert("No has respondido a la pregunta 20.");
		todorespondido = false;
	} else {
		document.getElementById("button_comp").disabled = false;
		alert("¡Tus respuestas han sido procesadas!. Completa unos últimos datos y haz click en enviar más abajo para entregar el formulario.")
	}



	if (todorespondido) {

		puntos = evaluarTAS();
		tiempo = getElapsedTime();
		document.getElementById("after_submit").style.visibility = "visible";
		document.getElementById("number_correct").innerHTML = "Has obtenido un total de " + puntos[0] + " puntos. " 
		+ "tiempo: " + tiempo + " ms. (F1: " + puntos[1] + "; F2: " + puntos[2] + "; F3: " + puntos[3] + ").";
		csv_row += codigo + sep + email + sep + tiempo + sep + puntos[0] + sep + puntos[1] + sep + puntos[2] + sep + puntos[3]; 
	}


}

// Esta función es análoga a la anterior para las variables demográficas:

function check1() {

	//De nuevo se extraen las variables del formulario:

	var sexo = parseInt(document.aenviar.sex.value);
	var genero = parseInt(document.aenviar.gender.value);
	var edad = document.aenviar.edad.value;
	var manoDominante = parseInt(document.aenviar.manoDominante.value);
	var estudios = parseInt(document.aenviar.estudios.value);
	var clase = document.aenviar.clase.value;
	var numhermanos = document.aenviar.hermanos.value;
	var posicionhermanao = document.aenviar.posicionhermano.value;
	var origen = document.aenviar.origen.value;
	var residencia = document.aenviar.residencia.value;
	var tiempoenresidencia = document.aenviar.tiempoenresidencia.value;
	var etnia = document.aenviar.etnia.value;
	var oficio = document.aenviar.oficio.value;
    

	document.getElementById("Total").value = puntos[0];
	document.getElementById("F1").value = puntos[1];
	document.getElementById("F2").value = puntos[2];
	document.getElementById("F3").value = puntos[3];
	document.getElementById("code").value = codigo;
	document.getElementById("email").value = email;
	document.getElementById("time").value = tiempo;
	document.getElementById("csv").value = csv_row;	
	

	
	var todorespondido1 = true;

	if (Number.isNaN(genero)) {
		alert("No has indicado tu identidad de género.");
		todorespondido1 = false;
	} else if (Number.isNaN(sexo)) {
		alert("No has indicado tu sexo.");
		todorespondido1 = false;
	} else if (Number.isNaN(edad)) {
		alert("No has indicado tu edad.");
		todorespondido1 = false;
	} else if (Number.isNaN(manoDominante)) {
		alert("No has indicado tu mano dominante.");
		todorespondido1 = false;
	} else if (Number.isNaN(estudios)) {
		alert("No has indicado tu nivel de estudios.");
		todorespondido1 = false;
	} else if (clase == "") {
		alert("No has indicado tu clase social.");
		todorespondido1 = false;
	}  else if (numhermanos == 9) {
		alert("No has indicado el número de hermanos.");
		todorespondido1 = false;
	}   else if (posicionhermanao == "") {
		alert("No has indicado tu posición entre tus hermanos.");
		todorespondido1 = false;
	}   else if (origen == "") {
		alert("No has indicado tu país de origen.");
		todorespondido1 = false;
	}   else if (residencia == "") {
		alert("No has indicado tu país de residencia.");
		todorespondido1 = false;
	}    else if (etnia == "") {
		alert("No has indicado tu origen étnico.");
		todorespondido1 = false;
	}   else if (oficio == "") {
		alert("No has indicado tu ocupación.");
		todorespondido1 = false;
	}   else {	
			csv_row += sep + sexo + sep + genero + sep + edad + sep + manoDominante + sep + estudios + sep + clase + sep + numhermanos + sep + posicionhermanao + sep + origen + sep + residencia + sep + tiempoenresidencia + sep + etnia + sep + oficio;	
			document.getElementById("after_submit2").style.visibility = "visible";
			document.getElementById("data_correct").innerHTML = "DATOS: " + csv_row;
			document.getElementById("button_enviar").disabled = false;
			document.getElementById("button_comp").disabled = true;
			<!-- setCookie(codigo, csv_row, 365); -->
			localStorage.setItem("tas20_" + codigo, csv_row);
			alert("¡Perfecto! Has terminado el formulario. Haz click en Enviar para terminar");
	} 


}








