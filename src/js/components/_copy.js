document.addEventListener('click', (e) => {
  if (!e.target.matches('.donate__copy-btn')) return

  const textContent =
    e.target.previousElementSibling.innerText
  navigator.clipboard.writeText(textContent)

  if (!navigator.clipboard.writeText(textContent)) return

  const message = e.target.nextElementSibling
  message.classList.add('message--copy')

  setTimeout(() => {
    message.classList.remove('message--copy')
  }, 1500)
})
