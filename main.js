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
},3500)// intervalo de 3.5 seg.

//Secciones aparecen ------------------------------------------------------------------------------------------
let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop; // variable con todos los elementos con la clase .animado
    for (var i=0; i < animado.length; i++) { // usamos for para recorrer uno por uno los elementos
        let alturaAnimado = animado[i].offsetTop; // vemos la altura a la que esta el scroll del elemento
        if(alturaAnimado - 350 < scrollTop){ //Elemento aparece cuando el scroll toca la punta superior menos 300
            animado[i].style.opacity = 1; // le damos opacity 1 para que aparezca
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll); // agregamos evento que vea el scroll y llame la funcion