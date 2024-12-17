var rotacionAcumulada=0;
function girar() {
    let giroR = Math.floor(Math.random()*5+1)
    let giroD = Math.floor(Math.random()*360) + 360 * giroR;
    
    document.documentElement.style.setProperty('--rotacion', `${giroD}deg`)
    rotacionAcumulada+= giroD;
    console.log(giroD);
    console.log(rotacionAcumulada)
}
   
