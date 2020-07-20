let text = document.getElementById('text');
let color1 = document.getElementById('color-1');
let color2 = document.getElementById('color-2');
let colorBox = document.getElementById('color-box');

const colorChange = () => {
	colorBox.style.backgroundImage = `linear-gradient(to right bottom, ${color1.value}, ${color2.value})`;
	color1.style.backgroundColor = color1.value;
	color2.style.backgroundColor = color2.value;
	text.textContent = colorBox.style.backgroundImage + ';';
	text.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;;

}

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
