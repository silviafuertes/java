//alert("Bienvenidos a mi sitio web");
/*

var name = "Silvia";
var age = 25;

alert(name);
var name;
alert(name)
*/
let name = "Silvia";
let age = 25;
let age2 = 30;

age = 28; // se puede reasignar valor;
let r =age +age2;
//alert(r);


let lastname;
lastname = "Fuertes"

//alert(name);

const pi = 3.1416;//no puedo volver a reasignar
//alert(pi);

let NAME = "JESUS",Name = "Juliana", NaMe = "Isabela", edad = 60;

//alert(NAME);
//alert(Name);
//alert(NaMe);
//alert(edad);

let texto = "Mi nombre es 'Maria'";
//alert(texto);

//variable de tipo booleano
let isBoolean = true;
//alert(isBoolean);

let number = 5;
++number; // es similar a esto number = number +1;
//alert(number);

let number2 = 10;
--number2; // es similar a esto number = number +1;
//alert(number2);

//alert(isBoolean);

let m = number2 % number;
//alert(m);

let answer = number2 < number;
//alert(answer);

//Manejo de arreglos

const personas = ['Maria', 'Lina', 'Salome'];
const mascotas = ['Conejo', 'Perro'];

alert(personas[0]);
alert(mascotas[0] + " "+mascotas[1]);
personas[1] ='Sol';//renombro nombre
alert (personas[1]);
//segunda manera de crear un arreglo
const cars = new Array("Mazda", "Ford",);
alert (cars[0]);

const frutas = [];
frutas[0] = 'Pera';
frutas[1] = 'Piña';
frutas[2] = 'Papaya';
alert (frutas[2]);

//realizar operaciones con arreglos
const numeros = [1, 2.5,9];
let resul = numeros[2] + numeros[0];
//alert ("El resultado es: " + resul);

//segunda manera de crear un arreglo
const carro = new Array("Mazda", "Ford", "Chevrolet");


let longitud = carro.length;
console.log(longitud)

//carro.push('Hyundai');//agrego un nuevo elemento
//carro.pop('Hyundai');//quitar elemento

carro.unshift('Hyunday');//agrega elemento al inicio del arreglo
carro.sort();
carro.shift('Hyunday');//ordena en orden alfabetico
console.log(carro.indexOf('Ford'))//en que indice esta ubicado la palabra especifica
document.getElementById("card").innerHTML = carro;

function obtener_dato(){
	let valor = document.getElementById('name').value;
	console.log(valor);
	let a = prompt("Ingrese un dato");//abrir ventana y capturar datos
	console.log(a);
}
