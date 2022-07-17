// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
import fullpage from "fullpage.js"
import SimplexNoise from "simplex-noise"

// Скролл по секциям
new fullpage("#fullpage", {
	// Navigation
	menu: "#menu",
	lockAnchors: false,
	anchors: ["intro", "web", "creatives", "motion", "logo", "contacts"],
	// Events
	onLeave: function (nextIndex) {
		if (nextIndex.index === 0) {
			document.querySelector(".sidebar__logo").classList.add("active")
		} else {
			document.querySelector(".sidebar__logo").classList.remove("active")
		}
	},
})

// menu items

document.querySelectorAll(".menu__item").forEach(elem => {
	elem.onmouseenter = elem.onmouseleave = e => {
		const tolerance = 10

		const left = 0
		const right = elem.clientWidth

		let x = e.pageX - elem.offsetLeft

		if (x - tolerance < left) x = left
		if (x + tolerance > right) x = right

		elem.style.setProperty("--x", `${x}px`)
	}
})

// BG
VANTA.NET({
	el: ".background",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	backgroundColor: 0xd091b,
	maxDistance: 24.0,
	spacing: 20.0,
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

// Audio
const c = document.getElementById("audio")
let $ = c.getContext("2d"),
	w = (c.width = 60),
	h = (c.height = 60),
	opts = {
		amount: 10,
		distance: 3,
		radius: 2.5,
		height: 10,
		span: Math.PI,
	},
	width = opts.amount * (opts.radius * 2 + opts.distance),
	arr = new Array(opts.amount).fill().map((el, ind) => {
		return {
			a: (opts.span / opts.amount) * ind,
			x: (opts.radius * 2 + opts.distance) * ind,
			c: "hsl(th, 75%, 55%)",
		}
	})
function loop() {
	$.fillStyle = "#0d091b"
	$.fillRect(0, 0, w, h)
	arr.forEach(el => {
		el.a += (Math.PI / 180) * 2
		$.beginPath()
		$.arc(el.x - width / 2 + w / 2, Math.sin(el.a) * opts.height + h / 2, opts.radius, 0, Math.PI * 2)
		$.closePath()
		$.fillStyle = "#fff"
		$.fill()
	})
	requestAnimationFrame(loop)
}
loop()

var audio = new Audio()
audio.src = "../files/music.mp3"
audio.autoplay = true
audio.loop = true
// const audio = document.querySelector("#music")
const audioBtn = document.querySelector(".header__music")

console.log(audio)
function togglePlay() {
	if (audio.muted === true) {
		audio.muted = false
		opts.height = 10
	} else {
		audio.muted = true
		opts.height = 3
	}
}

audioBtn.addEventListener("click", () => {
	togglePlay()
})
