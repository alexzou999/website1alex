loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0;
blurring()

loadText.style.opacity = 0.77
bg.style.filter = "blur(10px)"

function blurring() {
    load++
    loadText.innerText = `${load}%`

}