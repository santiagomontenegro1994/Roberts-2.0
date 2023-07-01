/* MENU ---------------------- Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

//codigo de slider------------------------------------------------------------------------------------------
let sliderInner = document.querySelector(".slider--inner");

let images = sliderInner.querySelectorAll("img"); // images contiene el numero de cantidad de imagenes 

let index = 1;

setInterval(function(){  //funcion que va alternando las imagenes
    let percentage = index * -100; //multiplico el numero del index *-100 para correr el numero de imagenes necesario
    sliderInner.style.transform = "translateX("+ percentage +"%)" //ejecuto el codigo para que la imagen se mueva el porcentaje necesario
    index++;
    if(index > (images.length-1)){ //cuando el index llega a el mismo numero de cantidad de imagenes se resetea
        index=0;
    }
},2000)// intervalo de 2 seg.
