function validarn(e) {
	// body...

	var teclado = (document.all) ? e.keyCode :e.which;
	if (teclado == 8) return true;

	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);

	}

function calcular() {
	// body...

	var num1 = document.getElementById("n1").value;
	var num2 = document.getElementById("n2").value;

	alert(num1);
	alert(num2);
	
	var nv1 = parseInt(num1);
	var nv2 = parseInt(num2);


	if (nv1 == nv2) {

		var resultado = nv1*nv2;

	}
	else if (nv1 > nv2) {

		var resultado = nv1 - nv2;

	}

	else{

		var resultado = nv1 + nv2;

	}

	alert("El resultado es " + resultado);

}

function tres() {
	// body...

	var num1 = document.getElementById("n1").value;
	var num2 = document.getElementById("n2").value;
	var num3 = document.getElementById("n3").value;

	alert(num1);
	alert(num2);
	alert(num3);
	
	var nv1 = parseInt(num1);
	var nv2 = parseInt(num2); 
	var nv3 = parseInt(num3);

	if ((nv1 == nv2) && (nv2 == nv3) && (nv1 == nv3)) {

		alert("Los tres numeros que se introdujeron son iguales, vuelva a introducirlos");

	}
	else if ((nv1 > nv2) && (nv1 > nv3)) {

		alert("El mayor de los numeros es: " + nv1);

	}
	else if ((nv2 > nv1) && (nv2 > nv3)) {

		alert("El mayor de los numeros es: " + nv2);

	}
	else{

		alert("El mayor de los numeros es: " + nv3);

	}

}

function calSalario() {
	// body...

	var paga = document.getElementById("salario").value;
	var horas = document.getElementById("horas").value;

	var pp = parseFloat(paga);
	var hp = parseFloat(horas);

	alert(pp);
	alert(hp);

	var extra = hp - 40;

	if (hp <= 0) {

		alert("Por favor, introduzca un valor de horas trabajadas valido");

	}
	else if (pp <=0) {

		alert("Por favor, introduzca un valor de salario valido");

	}

	else if ((extra > 0) && (extra <= 8)) {

		var agregarDoble = (pp * 2)* extra;
		var total = pp + agregar;

		alert("El pago extra es: " + agregar);
		alert("El pago total es: " + total);

	}
	else{

		var extra = hp - 48;


	}

	

}
