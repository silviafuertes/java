function perimetro() {
	
	let l1, l2, l3;
	l1 = parseInt(document.getElementById("lado1").value);
	l2 = parseInt(document.getElementById("lado2").value);
	l3 = parseInt(document.getElementById("lado3").value);

	perimetro = l1 + l2 +l3;
	//alert("El perimetro del triangulo es: " + perimetro)
	document.getElementById('registro_txt').innerHTML = registro;
}	

function tipo_triangulo() {
	let l1, l2, l3;
	let res;
	l1 = parseInt(document.getElementById("lado1").value);
	l2 = parseInt(document.getElementById("lado2").value);
	l3 = parseInt(document.getElementById("lado3").value);

	/*
	Triangulo es equilatero cuando todos los valores de sus lados son iguales
	triangulo es isoceles cuando 2 lados son iguales
	triangulo es escaleno cuando todos sus lados son diferentes
	*/
	if ((l1 == l2) && (l2 == l3)){
		r = ("Es un Triángulo Equilatero");
	}
	else{
		if((l1 == l2) || (l1 == l3) || (l2 == l3)){
		r = ("Es un Triángulo Isoceles");
		}
	else{
		r = ("Es un Triángulo Escaleno");//para optimizar codigo los tres alert se los puede utilizar en una variable
	}
}	
//alert("El resultado es " +r);
document.getElementById('resultado').innerHTML = r;
}