btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    search.classlist.toggle('active')
})