// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

VANTA.NET({
	el: ".background",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0x6b0848,
	backgroundColor: 0x0,
	points: 20.0,
	spacing: 16.0,
	showDots: false,
})

// parallax
let circle1 = document.querySelector(".menu-bg__circle_mini.one-circle")
let circle2 = document.querySelector(".menu-bg__circle_mini.two-circle")
window.addEventListener("mousemove", function (e) {
	let x = e.clientX / window.innerWidth
	let y = e.clientY / window.innerHeight
	circle1.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)"
	circle2.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)"
})
