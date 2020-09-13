var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var randButton = document.querySelector(".random")

//Convert RGB to HEX 

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

//----------------------------------------------------------

function updateBG(){body.style.background=
    "linear-gradient(to right, "+ color1.value+", "+color2.value+")"
    css.textContent = body.style.background
}


function randomNumbers(x){
    var randNum = Math.floor((Math.random()*x)+1)
    return randNum

}

function randomColors(){
     color1.value = rgbToHex(randomNumbers(255),+randomNumbers(255),+randomNumbers(255))
     color2.value = rgbToHex(randomNumbers(255),+randomNumbers(255),+randomNumbers(255))
     updateBG()

    }

updateBG()

color1.addEventListener("input", updateBG)
color2.addEventListener("input", updateBG)
randButton.addEventListener("click",randomColors)
