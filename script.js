


function rndnum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var targetRandom = document.documentElement

var gifPreload = document.querySelector(".logo")

setTimeout( function() {
	gifPreload.src = "./assets/logo.svg"
},2000)


// function for random movement of background picture

setInterval(function(){
	xpos = rndnum(0,-100);
	ypos = rndnum(0,-100);

	targetRandom.style.setProperty('--posx' , xpos + 'px')
	targetRandom.style.setProperty('--posy' , ypos + 'px')

},500)


