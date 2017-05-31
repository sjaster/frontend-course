'use strict';

let bodyElement, navElement, scrollElements, classes

function check(event) {
	if (bodyElement.scrollTop > 0)
		navElement.classList = classes.join(' ')
	else
		navElement.classList = classes.slice(0, 2).join(' ')
}

function init() {
	bodyElement = document.querySelector('body')
	navElement = document.querySelector('.navbar')
	scrollElements = document.querySelectorAll('*[data-onscroll]')
	classes = ['navbar', 'center', 'navbar-full']

	bodyElement.onscroll = check
}

window.onload = init;