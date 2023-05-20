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

// Handle form
const send = document.querySelector('#sendmessage')

send.addEventListener('click', e => sendMessage(e))

const sendMessage = e => {
    e.preventDefault()
    if (!document.forms.message.checkValidity()) return document.forms.message.reportValidity()
    // maybe custom validity message for every field?
    console.log('email will be sent')
}