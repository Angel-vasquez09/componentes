
const left     = document.querySelector("#left");
const right    = document.querySelector("#right");
const acordion = document.querySelector("#acordion");
const div_acord= document.querySelector("#contenedor-acordion");
const ancho    = (acordion.scrollWidth - div_acord.clientWidth) + 2 ; //* Tamaño del scroll + border right + border left del div_acord



//* AVANZAR EL SCROLL
right.addEventListener("click", () => {
    
    ocultar_right();
    ocultar_left();
    acordion.scrollLeft += 80;
    console.log(acordion.scrollLeft)
    console.log(ancho)
})

//* REGRESAR SCROLL
left.addEventListener("click", () => {
    ocultar_right();
    ocultar_left();
    acordion.scrollLeft -= 80;
    
})


acordion.addEventListener("scroll", () => {
    ocultar_right();
    ocultar_left();
})




//* OCULTAR RIGHT O LEFT
ocultar_right = () => {
    if(acordion.scrollLeft === 0){
        left.classList.add('none');
    }else{
        left.classList.remove('none');
    }
}

ocultar_left = () => {
    if(acordion.scrollLeft === ancho){
        console.log(acordion.scrollLeft, ancho)
        right.classList.add('none');
    }else{
        right.classList.remove('none');
    }
}

main = () => {
    ocultar_right();
}

main();