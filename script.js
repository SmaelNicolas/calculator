let arrayKeys = document.getElementsByClassName("key");
arrayKeys = [...arrayKeys];

let arrayKeysNumbers = document.getElementsByClassName("keyNumber");
arrayKeysNumbers = [...arrayKeysNumbers];

let arrayKeysSymbol = document.getElementsByClassName("keySymbol");
arrayKeysSymbol = [...arrayKeysSymbol];

let arraykeysOperation = document.getElementsByClassName("keyOperation");
arraykeysOperation = [...arraykeysOperation];

let count = 0;
let x = 0;
let y = 0;

let symbol;

let valid = false;
let delet = false;

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
let subDisplay = document.getElementById("subDisplay");

let off = document.getElementById("off");
let reset = document.getElementById("reset");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let point = document.getElementById("point");
let equals = document.getElementById("equls");

arrayKeysSymbol.forEach((key) => {
	key.addEventListener("click", () => {
		let value = key.innerHTML;
		let number = display.innerHTML;
		subDisplay.innerHTML += " " + value + " ";

		if (value === "=") {
			if (count == 0) {
				alert("insert 2 numbers");
				arraykeysOperation.forEach((key) => {
					key.disabled = !key.disabled;
				});
			} else {
				y = parseInt(number);
				let show = calculate(x, y, symbol);
				display.innerHTML = show;
				if (isNaN(show)) {
					subDisplay.innerHTML = "";
				} else {
					subDisplay.innerHTML += show + " | ";
				}

				valid = false;
				delet = true;
				count = 0;
				symbol = "";
			}
		}

		if (valid && count == 0) {
			symbol = key.innerHTML;
			x = parseInt(number);
			display.innerHTML = "";
			valid = false;
			count++;
			arraykeysOperation.forEach((key) => {
				key.disabled = !key.disabled;
			});
		} else {
			if (valid && count == 1) {
				symbol = key.innerHTML;
				y = parseInt(number);
				display.innerHTML = calculate(x, y, symbol);
				subDisplay.innerHTML += ` ${symbol}`;

				valid = false;
				delet = true;
				count = 0;
			}
		}
	});
});

arrayKeysNumbers.forEach((key) => {
	key.addEventListener("click", () => {
		if (delet) {
			display.innerHTML = "";
			delet = false;
		}
		if (symbol === "") {
			symbol = undefined;
			arraykeysOperation.forEach((key) => {
				key.disabled = !key.disabled;
			});
		}
		valid = true;
		let value = key.innerHTML;
		display.innerHTML += value;
		subDisplay.innerHTML += value;
	});
});

const calculate = (x, y, symbol) => {
	let res;
	switch (symbol) {
		case "+":
			res = parseInt(x) + parseInt(y);
			break;
		case "*":
			res = parseInt(x) * parseInt(y);
			break;
		case "-":
			res = parseInt(x) - parseInt(y);
			break;
		case "/":
			y !== 0
				? (res = parseInt(x) / parseInt(y))
				: (res = resetCalculator());
			break;
	}
	return res;
};
reset.addEventListener("click", () => {
	arraykeysOperation.forEach((key) => {
		key.disabled = true;
	});
	resetCalculator();
});

const resetCalculator = () => {
	display.innerHTML = "";
	subDisplay.innerHTML = "";
	count = 0;
	x = 0;
	y = 0;
	symbol = "";
	valid = false;
	delet = false;
	return "";
};

off.addEventListener("click", () => {
	arrayKeys.forEach((key) => {
		key.disabled = true;
	});
});
