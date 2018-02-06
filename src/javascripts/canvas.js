'use strict';

var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
color = 'rgba(0, 255, 255, 1)';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = 'block';

let dots = {
	number: Math.round((canvas.width * canvas.height)/1250),
	array: []
};

class Dot {
	constructor(){
		this.x = Math.random()*canvas.width;
		this.y = Math.random()*canvas.height;
		this.xSpeed = (-.5+Math.random())*.6;
		this.ySpeed = (-.5+Math.random())*.6;
		this.radius = Math.random()
		this.create = ()=>{
			ctx.fillStyle = color;
			ctx.strokeStyle = color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
			ctx.fill();
		};
		this.animate = ()=>{
			if(this.y < 0 || this.y > canvas.height){
				this.ySpeed = -this.ySpeed;
			}else if(this.x < 0 || this.x > canvas.width){
				this.xSpeed = -this.xSpeed;
			}
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		};
	}
}

const drawDots = ()=>{
	for(let i = 0; i < dots.number; i++){
		dots.array.push(new Dot());
		const dot = dots.array[i];
		dot.create();
	}
};
drawDots();

const animateDots = ()=>{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(let i in dots.array){
		dots.array[i].animate();
		dots.array[i].create();
	}
	requestAnimationFrame(animateDots)
}
animateDots();


window.addEventListener('resize', ()=>{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	dots.number = Math.round((canvas.width * canvas.height)/1250);
	dots.array = [];
	drawDots();
}, true);