var b = document.querySelectorAll(".bola")
function rojo() {
    b.forEach(element => {
        element.style.backgroundColor = "red";
        element.style.boxShadow = "1px 1px 15px red"
    });
    
}
function verde() {
    b.forEach(element => {
        element.style.backgroundColor = "aquamarine";
        element.style.boxShadow = "1px 1px 15px aquamarine"
    });
}
function azul() {
    b.forEach(element => {
        element.style.backgroundColor = "blue";
        element.style.boxShadow = "1px 1px 15px blue"
    });
}