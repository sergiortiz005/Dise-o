function nevar(params) {
    let audio = document.querySelector('audio');
    let t = document.querySelector(".copos");
    t.classList.add('movercopo');
    console.log(audio);
    audio.play();
    setTimeout(eliminarfuncion,8000);
}


function eliminarfuncion(funcion) {
    let t = document.querySelector('.movercopo')
    t.classList.remove('movercopo')
}