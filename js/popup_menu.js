const popupMenu = document.querySelector('.popup')

const buttonMenu = document.querySelector('.header_nav__btn_menu')

function toggleClassToElement() {
    popupMenu.classList.toggle('hide')
}

buttonMenu.addEventListener('click', toggleClassToElement)