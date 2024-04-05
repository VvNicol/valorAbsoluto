/**
 * 
 */

let numeroUsuario;
let valorAbs;
function ingresarValor() {

	do {
		numeroUsuario = prompt("Ingrese un número para saber si es absoluto", 1);
	} while (isNaN(numeroUsuario) || numeroUsuario.trim() === "");

	valorAbs = Math.abs(numeroUsuario);
	document.getElementById("textoHtml").innerHTML = "Resultado: " + valorAbs;
}