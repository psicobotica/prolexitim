
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


function EmailInvalid(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.match(mailformat)) {
		return false;
	} 
	else {
		return true;
	}
}



 /* La función check() comprueba que se han contestado todas las preguntas del TAS. De no ser así aparece una alarma, en caso contrario muestra los resultados por pantalla.
 Además devuelve una lista con los cuatro resultados clave del TAS (total, F1, F2, F3 */

function check() {

	console.log("checking form...");
//	Se almacenan las respuestas en variables:

	var respuestaF1_1 = parseInt(document.formtas20.questionF1_1.value);
	console.log("F1_1: " + respuestaF1_1);
	var respuestaF2_2 = parseInt(document.formtas20.questionF2_2.value);
	var respuestaF1_3 = parseInt(document.formtas20.questionF1_3.value);
	var respuestaF2_4 = parseInt(document.formtas20.questionF2_4.value);
	var respuestaF3_5 = parseInt(document.formtas20.questionF3_5.value);
	var respuestaF1_6 = parseInt(document.formtas20.questionF1_6.value);
	var respuestaF1_7 = parseInt(document.formtas20.questionF1_7.value);
	var respuestaF3_8 = parseInt(document.formtas20.questionF3_8.value);
	var respuestaF1_9 = parseInt(document.formtas20.questionF1_9.value);
	var respuestaF3_10 = parseInt(document.formtas20.questionF3_10.value);
	var respuestaF2_11 = parseInt(document.formtas20.questionF2_11.value);
	var respuestaF2_12 = parseInt(document.formtas20.questionF2_12.value);
	var respuestaF1_13 = parseInt(document.formtas20.questionF1_13.value);
	var respuestaF1_14 = parseInt(document.formtas20.questionF1_14.value);
	var respuestaF3_15 = parseInt(document.formtas20.questionF3_15.value);
	var respuestaF3_16 = parseInt(document.formtas20.questionF3_16.value);
	var respuestaF2_17 = parseInt(document.formtas20.questionF2_17.value);
	var respuestaF3_18 = parseInt(document.formtas20.questionF3_18.value);
	var respuestaF3_19 = parseInt(document.formtas20.questionF3_19.value);
	var respuestaF3_20 = parseInt(document.formtas20.questionF3_20.value);

	var genero = parseInt(document.formtas20.Gender.value);
	console.log("Genero:" + genero);
	var edad = document.formtas20.Age.value;
	console.log("Edad: " + edad);
	var email = document.formtas20.Email.value;
	console.log("Email: " + email);
	var privacidad = document.formtas20.Privacidad.checked; 
	console.log("Privacidad: " + privacidad);
	
	var todorespondido = true;

	if (Number.isNaN(respuestaF1_1)) {
		alert("No has respondido a la pregunta 1.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF2_2)) {
		alert("No has respondido a la pregunta 2.");
		todorespondido = false;
	} else if (Number.isNaN(respuestaF1_3)) {
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
	} else if (Number.isNaN(genero)) {
		alert("No has indicado tu identidad de género.");
		todorespondido = false;
	} else if ( edad < 18 || edad > 100) {
		alert("No has indicado una edad válida.");
		todorespondido = false;
	} else if (EmailInvalid(email)) {
		alert("El email introducido no es correcto.");
		todorespondido = false;
	} else if (!privacidad) {
		alert("Es necesario que aceptes la política de privacidad.");
		todorespondido = false; 
	}


	if (todorespondido) {

		var puntosF1 = 0;
		puntosF1 = respuestaF1_1 + respuestaF1_3 + respuestaF1_6 + respuestaF1_7 + respuestaF1_9 + respuestaF1_13 + respuestaF1_14;

		var puntosF2 = 0;
		puntosF2 = respuestaF2_2 + respuestaF2_4 + respuestaF2_11 + respuestaF2_12 + respuestaF2_17;

		var puntosF3 = 0;
		puntosF3 = respuestaF3_5 + respuestaF3_8 + respuestaF3_10 + respuestaF3_15 + respuestaF3_16 + respuestaF3_18 + respuestaF3_19 + respuestaF3_20;

		var total = puntosF1 + puntosF2 + puntosF3;
		
		// Se almacena la puntuación total en una variable:
		puntos = [total, puntosF1, puntosF2, puntosF3];

		document.getElementById("TAS20").value = puntos[0];
		document.getElementById("F1").value = puntos[1];
		document.getElementById("F2").value = puntos[2];
		document.getElementById("F3").value = puntos[3];
		document.getElementById("input-email").value = email;
		document.getElementById("Code").value = md5(email);		
		
		document.getElementById("thanksMsg").innerHTML = "<h4>Gracias. Datos recibidos correctamente.</h4>";
		document.getElementById("results").innerHTML = "Has obtenido un total de " + puntos[0] + " puntos. " 
		+ "(F1: " + puntos[1] + "; F2: " + puntos[2] + "; F3: " + puntos[3] + ").";	
	}
	
	return todorespondido; 

}