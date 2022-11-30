const musiclink = "https://cms-public-artifacts.artlist.io/content/music/aac/6192_262020_262020_Funky_Chinese_Chicken_-16-44.1-.aac"

const buttonNode = document.querySelector(".btn")

const audioNode = document.createElement("audio")
audioNode.src = musiclink

const toggleMusic = () => {
    if (audioNode.paused) {
        audioNode.play()
        buttonNode.innerHTML = "<i class='fa fa-pause'></i>"
    } else {
        audioNode.pause()
        buttonNode.innerHTML = "<i class='fa fa-play-circle fa-2x'></i>"
    }
}

buttonNode.onclick = toggleMusic;