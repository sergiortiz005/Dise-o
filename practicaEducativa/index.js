//get the video
var video = document.getElementById("myVideo");
//getthebuttom
var btn = document.getElementById("myBtn");

//get button sound
var soundBtn = document.getElementById("soundBtn");
var soundImg = document.getElementById("soundImg");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function soundMute() {
  if (video.muted) {
    video.muted = false;
    soundImg.src = "imgs/sound.png";
    soundImg.alt = "Sound on";
  } else {
    video.muted = true;
    soundImg.src = "imgs/mute.png";
    soundImg.alt = "Sound off";
  }
}

