panels = ddocument.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
}})