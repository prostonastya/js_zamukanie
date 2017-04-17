
// -------------------------
// ДЗ Замыкание

// // Задача1
// // F getDolar() вернет вернет 0, 
// // т.к. она создана внутри анонимной функции, 
// // где в окружении var dollar = 0;

// var dollar,
// 	getDolar;

// (function(){
// 	var dollar = 0;
// 	getDolar = function(){
// 		return dollar;
// 	}
// }());

// dollar = 30;
// console.log(getDolar());

// // --------------------------------------

// // Задача2
// // первый console.log выведет HelloWorld, 
// // а во втором случае выдаст ошибку, т.к. 
// // переменная text не определена в глобальном окружении,
// // ее видно только локально внутри анонимной функции

// var greet = "Hello";

// (function (){
// 	var text = 'World';
// 	console.log(greet + text)
// }());

// console.log(greet + text);

// // --------------------------------------------------------
// // Задача3

// function minus(value){
// 	 var value = value || 0;

// 	function subtraction(number){
// 		var number = number || 0;
// 		return value - number
// 	}

// 	return subtraction
// }


// console.log(minus(10)(6));

// // ------------------------------------------------------------


// // Задача4

// function MultiplyMaker(number){
	
// 	function factor (setNumber){
// 		return number *= setNumber
// 	}

// 	return factor
// }

// const multiply = MultiplyMaker(2);

// multiply(2);
// multiply(1);
// multiply(3);
// multiply(10);

// // -------------------------------------------------------------------------

// // Задача5

// var module = (function () {
// 	var str = '';

// 	function setStr(text){
// 		str = text || '';
// 		if (typeof str == 'number'){
// 			str = str + '';
// 		}
// 	}

// 	function getStr(){
// 		return str
// 	}

// 	function getLength(){
// 		return str.length;
// 	}

// 	function inverse(){
// 		var newStr = '';
// 		for (var i = str.length-1; i >=0 ; i--) {
// 			newStr += str[i];
// 		}
// 		return newStr
// 	}

// 	return {
// 		setStr,
// 		getStr,
// 		getLength,
// 		inverse
// 	}

// })();

// module.setStr('abcde');
// module.getStr();
// module.getLength();
// module.inverse();

// // ----------------------------------------------------

// // Задача6

var module = (function () {
	var value = 0;

	function setValue(number){
		value = number;		
		return this
	}

	function plus(number){
		value+=number;
		return this
	}

	function multiply(number){
		value*=number;
		return this
	}

	function exponent(count){
		var NewValue = 1;
		for (var i = 1; i <= count; i++) {
			NewValue*=value;
		}

		value = NewValue;
		return this
	}
	

	function getValue(){
		return value.toFixed(2);
	}

	return {
		setValue,
		plus,
		multiply,
		getValue,
		exponent
	}

})();


// Конструкторы

// // Задача1

// function Car(type,age){

// 	this.getType = function(){
// 		return type[0].toUpperCase() + type.substr(1,type.length-1);
// 	}

// 	this.getYear = function(){
// 		const date = new Date();
		
// 		return date.getFullYear() - age
// 	}

// }


// var lexus = new Car('lexus',2);

// console.log(lexus.getType());
// console.log(lexus.getYear());

// // --------------------------------------------------------------

// // Задача2
// 116 101 115 116

function Codify(str){

	this.getStr = function(){
		return str
	};

	this.getCipher = function(){
		
		var newStr = '';
		for (let i = 0; i < str.length; i++) {

			newStr += str.charCodeAt(i);
		}
		console.log(newStr);
		return newStr
	};

	this.deleteStr = function(){
		str = '';
		return str
	}

};


var cod1 = new Codify('test');

// --------------------------------------------

// // Задача3

function ClassString(str){

	this.setStr = function(userString){
		str = userString;
		return str
	}

	this.getStr = function(){
		return str
	}

	this.getLength = function(){
		return str.length;
	};

	// не знаю, как сделать +str//4

	// this.toString = function(){
	// 	return
	// }
	
};

var str = new ClassString('test');
