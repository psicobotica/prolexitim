var email = null;
var codigo = null; 

function welcome() {
alert("Bienvenido al test Prolexitim NLP");
}


function getEmail() {
	while (email == null || email == "") {
		email = prompt("Introduce tu direcci�n de correo electr�nico. Este formulario es totalmente an�nimo.");
	}
}

function genCode() {
	codigo = md5(email);
}

function check() {
	document.getElementById("time").value = getElapsedTime();
	document.getElementById("code").value = codigo;
	document.getElementById("email").value = email;
} 











