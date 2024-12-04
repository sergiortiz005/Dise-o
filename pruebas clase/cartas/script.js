var auxCarta = null;
let acierto = 0;
let fallo = 0;
var nf = document.getElementById("nf");

function girarCarta(cartaGirada) {
    
    cartaGirada.classList.toggle('girada');
    setTimeout(comparar,700,cartaGirada);
    
}

function comparar(carta2) {

    // console.log(auxCarta.id);
    console.log(carta2.id);

    if(auxCarta===null){
        auxCarta = carta2;

    }else{
        if( auxCarta.id == carta2.id){
            acierto++;
        }else{
            
            auxCarta.classList.remove('girada');
            carta2.classList.remove('girada');
            fallo++;
        }
        auxCarta=null;
        


    }

    if(acierto==3){
        nf.innerHTML = "Numero de fallos: "+ fallo;
    }
}