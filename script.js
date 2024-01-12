var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";
}

function decimalToHex(a) { 
	// let a = Number(n);
	if (a === 10) {return "A"}
	else if (a === 11) { return "B"}
	else if (a === 12) {return "C"}
	else if (a === 13) {return "D"}
	else if (a === 14) {return "E"}
	else if (a === 15) {return "F"}
	else {return a};
}

function randomNumber() {
	let dec = Math.floor(Math.random() * 256);
	let hex1 = decimalToHex(Math.floor(dec / 16));
	let hex2 = decimalToHex(dec % 16);
	return "" + hex1 + hex2;
}

function randomColor() {
	let a = randomNumber();
	let b = randomNumber();
	let c = randomNumber();
	return "#" + a + b + c;
}

function randomGradient() {
	let a = randomColor();
	let b = randomColor();

	body.style.background =
		"linear-gradient(to right, "
		+ a
		+ ", "
		+ b
		+ ")";

		color1.value = a;
		color2.value = b;

		css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);

