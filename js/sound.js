sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'laugh']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}

toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})
