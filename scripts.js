//invert the colour scheme
var invert = document.querySelector('.invert')
var body = document.querySelector('body')

invert.addEventListener('click', darkMode)

function darkMode(){
	body.classList.toggle('dark-mode')
if (localStorage.getItem('mode') == 'dark'){
	localStorage.setItem('mode', 'light')
} else{
	localStorage.setItem('mode','dark')
}
} //darkMode function ends

if (localStorage.getItem('mode') == 'dark'){
	body.classList.add('dark-mode')
}

//greeting section
var h1 = document.querySelector('h1')
var altHi = ['Clouds are ridiculous', 'Clouds are rad', 'Clouds are my favourite']

if(localStorage.getItem('visited')){
	//random new greeting
	var random = Math.floor(Math.random() * altHi.length)

	h1.textContent = altHi[random]
}else{
	//add visited to storage
	localStorage.setItem('visited', 'true')
}