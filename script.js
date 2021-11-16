let arrayKeys = document.getElementsByClassName("key");
console.log(arrayKeys);
arrayKeys = [...arrayKeys];
console.log(arrayKeys);

let valid = true;

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eigth = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");

let display = document.getElementById("result");

let onOff = document.getElementById("onOff");
let reset = document.getElementById("reset");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let point = document.getElementById("point");
let equals = document.getElementById("equls");

arrayKeys.forEach((key) => {
	key.addEventListener("click", () => {
		if (valid) {
			if (isNaN(key.innerHTML) && valid) {
				display.innerHTML += key.innerHTML;

				valid = !valid;
			} else {
				if (isNaN(key.innerHTML) && !valid) {
					console.log("doble simbolo");
				} else {
					display.innerHTML += key.innerHTML;

					valid = true;
				}
			}
		}

		console.log("funciona");
	});
});
