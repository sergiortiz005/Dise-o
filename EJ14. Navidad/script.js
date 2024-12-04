// El archivo js...
// Así os ahorro el gran trabajo y sudor que supone crearlo y así Miguel está obligado a no integrarlo en el HTML
function elem_visibles() {
    let t = document.querySelector(".hohoho");
    let i = document.querySelector(".destellos")
    console.log(t);
    console.log(i);
    t.classList.toggle('ani');
    i.classList.toggle('ver')
    
}