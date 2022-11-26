import './vendor/focus-visible.js'
import $ from 'jquery'
import 'magnific-popup'

window.jQuery = $
window.$ = $

const optionsPopup = {
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка картинки #%curr%...',
  closeBtnInside: false,
  closeOnContentClick: true,
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError:
      '<a href="%url%">The image #%curr%</a> could not be loaded.',
  },
  zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out', 
  },
}


$('[data-popup=about]').magnificPopup(optionsPopup)

$('[data-popup=focus]').magnificPopup(optionsPopup)

$('[data-popup=help]').magnificPopup(optionsPopup)
