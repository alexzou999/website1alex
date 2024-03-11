toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close =

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
