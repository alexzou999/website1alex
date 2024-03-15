btn = document.querySelector('.btn')
search = document.querySelector('.search')
toggle = document.getElementById('toggle')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})
