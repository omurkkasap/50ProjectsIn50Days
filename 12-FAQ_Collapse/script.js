const toggles = document.querySelectorAll('.faq-toggle')


// chevron.addEventListener('click', () => {
//   faq.classList.toggle("active")
//   console.log('hello');
// })

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})