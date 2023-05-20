// Handle menu
const menu = document.querySelector('#menu')
const open = document.querySelector('#open')
const close = document.querySelector('#close')

menu.addEventListener('click', e => {
    menu.classList.toggle('open')
    open.classList.toggle('hidden')
    close.classList.toggle('hidden')
})

// Handle accordion
const accordion = document.querySelector('.accordion__container')

accordion.addEventListener('click', e => {
    const item = e.target.closest('li')
    if (!item) return
    const items = Array.from(document.querySelectorAll('.accordion__item'))
    items.map(item => item.classList.remove('expanded'))
    item.classList.add('expanded')
})

// TODO:
// add keyboard support, up down arrows