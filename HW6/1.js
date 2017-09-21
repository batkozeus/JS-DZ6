// Task 1

document.querySelector('.one').onmousemove = function (e) {
	var xer = document.getElementById('xer');
	var yer = document.getElementById('yer');
	xer.innerHTML = 'X - ' + e.offsetX;
	yer.innerHTML = 'Y - ' + e.offsetY;
}


// Task 2

document.querySelector('.two').ondblclick = function () {
	this.style.backgroundImage = 'url(https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/folder-open-64.png)';
}


// Task 3

var four = document.querySelector('.three');
for (var i = 0; i <= 300; i++) {
	four.innerHTML += '<div class="hidden"></div>';
}

var hidden = document.getElementsByClassName('hidden');
for (var i = 0; i<hidden.length; i++) {
	hidden[i].onmouseenter = rounder;
}

function rounder () {
	this.style.borderRadius = '50px';
}


// Task 4

var container = document.querySelector('.four');

var myImg = document.getElementsByClassName('myImg');
for (var i = 0; i<myImg.length; i++) {
	myImg[i].onclick = inserter;
}

function inserter () {
	container.style.backgroundImage = 'url(' + this.src + ')';
}


// Task 5

var sdvig = 0;

var padalschik = document.querySelector('.five');

padalschik.onclick = function () {
	sdvig = sdvig + 100;
	padalschik.style.marginTop = sdvig + 'px';
}


// Task 5

var tunel = document.querySelector('.six');
var triger = document.querySelector('.triger');
var trigerPosition = document.querySelector('#trigerPosition');

document.querySelector('#b6').onclick = changeTriger;

function changeTriger () {
	if (triger.classList.contains('left')) {
		triger.classList.remove('left');
		triger.classList.add('center');
		trigerPosition.innerHTML = 'Положение триггера - 1';
	}
	else if (triger.classList.contains('center')) {
		triger.classList.remove('center');
		triger.classList.add('right');
		trigerPosition.innerHTML = 'Положение триггера - 2';
	}
	else {
		triger.classList.remove('right');
		triger.classList.add('left');
		trigerPosition.innerHTML = 'Положение триггера - 0';
	}
}
