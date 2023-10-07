const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft= document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft= "-200%";
    slider.style.transition= "all 0.5s";
    setTimeout(function () {
         slider.style.transition = "none";
     slider.insertAdjacentElement('beforeend',sliderSectionFirst);
    slider.style.marginLeft= "-100%";
 },500);
}
btnRight.addEventListener('click', function()
{Next();
});

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnLeft.addEventListener('click', function () {
    Prev();
});

setInterval(function(){Next();},5000);

//boton menu
let btnMenu=document.getElementById('btn-menu');
let mainNav=document.getElementById('main-nav');
btnMenu.addEventListener('click',function(){
mainNav.classList.toggle('mostrar');});