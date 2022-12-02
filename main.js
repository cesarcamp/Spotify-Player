const musiclink = "https://cms-public-artifacts.artlist.io/content/music/aac/6192_262020_262020_Funky_Chinese_Chicken_-16-44.1-.aac"
const buttonNode = document.querySelector(".btn")
const audioNode = document.createElement("audio")
audioNode.src = musiclink
const timeNode = document.querySelector(".time")
const heartbutton = document.querySelector(".heart")

const toggleMusic = () => {
    if (audioNode.paused) {
        audioNode.play()
        buttonNode.innerHTML = "<i class='fa fa-pause-circle fa-2x'></i>"
    } else {
        audioNode.pause()
        buttonNode.innerHTML = "<i class='fa fa-play-circle fa-2x'></i>"
    }
}

const onTimeUpdated = () => {
    const rest = audioNode.duration - audioNode.currentTime;
    const min = Math.floor(rest / 60);
    const sec = Math.floor(rest % 60);
    timeNode.innerText ="-" + min + ":" + sec;
}

const likesong = () => {
    heartbutton.innerHTML = "<i class='fa fa-heart fa-2x'></i>";
    heartbutton.style.color = "white";
}

buttonNode.onclick = toggleMusic;
audioNode.ontimeupdate = onTimeUpdated;
heartbutton.onclick = likesong;

