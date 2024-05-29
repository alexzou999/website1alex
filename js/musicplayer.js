
const musicContainer = document.getElementById('music-container')

const playBtn = document.getElementById('play')
const titles = document.getElementById('title')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

//Song titles
const songs = ['hey', 'summer', 'ukelele']

//Keep track of song
let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    titles.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//Play song
function playSong() {
musicContainer.classList.add('play')
audio.play()
playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
playBtn.querySelector('i.fa-solid').classList.add('fa-pause')
}

//Pause song
function pauseSong() {
    musicContainer.classList.remove('play')
audio.pause()
playBtn.querySelector('i.fa-solid').classList.add('fa-play')
playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')  
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progressPercent.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = clickX / width * duration
}

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click,', setProgress)
