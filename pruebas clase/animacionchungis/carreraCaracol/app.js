var t = document.querySelectorAll(".caracol");
var b = document.querySelector("button");
var l = document.querySelectorAll(".linea h2");
console.log(l[0]);

var g1 = 0;
var g2 = 0;
var g3 = 0;
var opacidad;

function comienzo() {
    let t1 = Math.floor(Math.random() * 10);
    let t2 = Math.floor(Math.random() * 10);
    let t3 = Math.floor(Math.random() * 10);
    g1 += t1;
    g2 += t2;
    g3 += t3;

    t[0].style.left = `${g1}vw`;
    t[1].style.left = `${g2}vw`;
    t[2].style.left = `${g3}vw`;

    if (g1 >= 80 && l[0].style.opacity !== "1") {
        l[0].style.opacity = 1;
        b.disabled = true;
    } else if (g2 >= 80 && l[1].style.opacity !== "1") {
        l[1].style.opacity = 1;
        b.disabled = true;
    } else if (g3 >= 80 && l[2].style.opacity !== "1") {
        l[2].style.opacity = 1;
        b.disabled = true;
    }
}
