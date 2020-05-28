function verificarNumero1() {
	// body...
	var numero=parseFloat(document.getElementById('num1').value);
	var numero2=parseFloat(document.getElementById('num2').value);
	var resultado;
	var numonly=new RegExp("[0-9]");

		if (numonly.test(numero) && numonly.test(numero2)) {
			if (numero<numero2) {
				resultado=(numero + numero2);
				document.getElementById('res').value=resultado;
			}else if(numero>numero2){
				resultado=(numero-numero2);
				document.getElementById('res').value=resultado;
			}else if(numero=numero2){
				resultado=(numero*numero2);
				document.getElementById('res').value=resultado;
			}
		}else{
			alert("Verifica los datos ingresados, recuerda que solo puedes ingresar numeros y no puedes dejar campos vacios");
		}
	return;
}

function verificarNumero2() {
	// body...
	var numero=parseFloat(document.getElementById('num1').value);
	var numero2=parseFloat(document.getElementById('num2').value);
	var numero3=parseFloat(document.getElementById('num3').value);
	var maximo;
	var numonly=new RegExp("[0-9]");
	try{
		if (numonly.test(numero) && numonly.test(numero2)) {
			if (numero>numero2 && numero>numero3) {
				maximo=numero;
				document.getElementById('numMax').value=maximo;
			}else if(numero2>numero && numero2>numero3){
				maximo=numero2;
				document.getElementById('numMax').value=maximo;
			}else if(numero3>numero && numero3>numero2){
				maximo=numero3;
				document.getElementById('numMax').value=maximo;
			}else if(numero==numero2 && numero>numero3){
				maximo=numero;
			}else if(numero==numero2 && numero<numero3){
				maximo=numero3;
				document.getElementById('numMax').value="Los tres numero son iguales";
			}else if(numero>numero2 && numero2==numero3){
				maximo=numero;
				document.getElementById('numMax').value=maximo;
			}else if(numero<numero2 && numero2==numero3){
				maximo=numero2;
				document.getElementById('numMax').value=maximo;
			}else if(numero==numero3 && numero>numero2){
				maximo=numero;
				document.getElementById('numMax').value=maximo;
			}else if(numero==numero3 && numero<numero2){
				maximo=numero2;
				document.getElementById('numMax').value=maximo;
			}else{
				document.getElementById('numMax').value="Los tres numeros son iguales";
			}
		}else{
				alert("Verifica los datos ingresados, recuerda que solo puedes ingresar numeros y no puedes dejar campos vacios");
		}
	}catch(e){
		return;
	}
	return;
}

function verificarNumero3() {
	// body...
	var salario=parseFloat(document.getElementById('num1').value);
	var horas=parseFloat(document.getElementById('num2').value);
	var resultado;
	var horasextra;
	var horasdobles;
	var numonly=new RegExp("[0-9]");

	if (numonly.test(salario) && numonly.test(horas)) {
			if (salario<100) {
				if (horas<=40) {
					resultado=(horas*salario);
					document.getElementById('sal').value=resultado;
				}else if(horas>40 && horas<=48){
					horasextra=(horas-40);
					resultado=((horas-horasextra)*salario)+(horasextra*salario*2);
					document.getElementById('sal').value=resultado;
				}else if(horas>48 && horas<=60){
					horasextra=(horas-40);
					horasdobles=(horasextra-8);
					resultado=((horas-horasextra)*salario)+((horasextra - horasdobles)*salario*2) + (horasdobles*salario*3);
					document.getElementById('sal').value=resultado;
				}else{
					alert("las horas de trabajo no pueden superar las 60 horas");
				}
			}else{
				alert("El salario no puede ser mayor a 99 pesos");
			}
		}else{
			alert("Verifica los datos ingresados, recuerda que solo puedes ingresar numeros y no puedes dejar campos vacios");
		}
	return;
}

function verificarNumero4() {
	// body...
	var sueldo=parseFloat(document.getElementById('num1').value);
	var meses=parseFloat(document.getElementById('num2').value);
	var resultado;
	var numonly=new RegExp("[0-9]");
	var años=meses/12;
		if (numonly.test(sueldo) && numonly.test(meses)) {
			if (sueldo<=100000) {
				if (años<1) {
					resultado=(sueldo*0.05);
					document.getElementById('util').value=resultado;
				}else if(años>=1 && años<2){
					resultado=(sueldo*0.07);
					document.getElementById('util').value=resultado;
				}else if(años>=2 && años<5){
					resultado=(sueldo*0.1);
					document.getElementById('util').value=resultado;
				}else if(años>=5 && años<10){
					resultado=(sueldo*0.15);
					document.getElementById('util').value=resultado;
				}else if(años>=10 && años<60){
					resultado=(sueldo*0.2);
					document.getElementById('util').value=resultado;
				}else{
					alert("Los años de trabajo no pueden superar los 60 (720 meses)");
				}
			}else{
				alert("El sueldo no puede ser mayor a 100,000");
			}
		}else{
			alert("Verifica los datos ingresados, recuerda que solo puedes ingresar numeros y no puedes dejar campos vacios");
		}
	return;
}