'use strict';

let bodyElement, navElement, scrollElements, classes, dropdownElement, open = false

function check(event) {
	if (bodyElement.scrollTop > 0) {
		// navElement[0].classList = classes.join(' ')
		// navElement[1].classList = classes.join(' ')
		navElement.forEach(e => e.classList = classes.join(' '))

	} else {
		// navElement[0].classList = classes.slice(0, 2).join(' ')
		// navElement[1].classList = classes.slice(0, 2).join(' ')
		navElement.forEach(e => e.classList = classes.slice(0, 2).join(' '))
	}
}

function toggle(e) {
	if (open)
		dropdownElement.classList.add('hidden')
	else
		dropdownElement.classList.remove('hidden')
	open = !open
}

function init() {
	bodyElement = document.querySelector('body')
	dropdownElement = document.querySelector('.dropdown')
	navElement = document.querySelectorAll('.navbar')
	scrollElements = document.querySelectorAll('*[data-onscroll]')
	classes = ['navbar', 'center', 'navbar-full']

	bodyElement.onscroll = check
	document.querySelector('#navbar-hamburger').addEventListener('click', toggle)
}

window.onload = init;