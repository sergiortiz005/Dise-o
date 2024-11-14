var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var soundBtn = document.getElementById("soundBtn");
var soundImg = document.getElementById("soundImg");
var showTime = 2;


function myFunction() {
    if (video.paused){
        video.play();
        btn.innerHTML="Pause";
    }else{
        video.pause();
        btn.innerHTML= "Play"
    }
    
}
function soundMute() {
    if (video.muted){
        video.muted=false;
        soundImg.src ="volume-up-4-32.png";
        soundImg.alt = "sound"
    }else{
        video.muted=true;
        soundImg.src= "mute-32.png"
        soundImg.alt= "mute";
    }
    
}
video.addEventListener("timeupdate",function(){
    if(video.currentTime >= showTime && video.currentTime < showTime+5){
        videotitle.style.display = "block";

    }else{
        videotitle.style.display= "none";
    }
});