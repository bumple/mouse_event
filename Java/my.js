let imgOBj = null;
imgOBj = document.getElementById("myImage");

function init() {
    imgOBj = document.getElementById("myImage");
    imgOBj.style.position = 'relative';
    imgOBj.style.left = '0px';
}

function moveRight() {
    imgOBj.style.left = parseInt(imgOBj.style.left) + 10 + "px";
    imgOBj.style.left = parseInt(imgOBj.style.left) + 10 + "px";
    imgOBj.style.left = parseInt(imgOBj.style.left) + 10 + "px";
}

window.onload = init()

