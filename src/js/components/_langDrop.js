const langBtn = document?.querySelector('.lang__choose')

langBtn.addEventListener('click', () => {
  langBtn.nextElementSibling.classList.toggle('lang__list--active')
})
