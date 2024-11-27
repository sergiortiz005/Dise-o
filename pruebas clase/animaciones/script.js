function translateCaja(){
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-trans');

    const img=document.querySelector('.img');
    img.classList.toggle('img-trans');
}
function rotate2DCaja(){
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-rot2d');

    const img=document.querySelector('.img');
    img.classList.toggle('img-rot2d');
}
function rotate3DCaja(){
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-rot3d');

    const img=document.querySelector('.img');
    img.classList.toggle('img-rot3d');
}
function skew(){
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-skew');

    const img=document.querySelector('.img');
    img.classList.toggle('img-skew');
}