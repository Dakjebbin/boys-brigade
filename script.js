
document.querySelector('.js-open-button')  .addEventListener('click', () => {
    let sidebar = document.querySelector('.mobile');
    sidebar.style.display = 'flex'
})

document.querySelector('.js-close-button') .addEventListener('click', () => {
   sidebar = document.querySelector('.mobile');
   sidebar.style.display = 'none'
})