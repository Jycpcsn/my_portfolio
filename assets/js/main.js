// element selector
const $ = selector => document.querySelector(selector)


const side_bar = $('.side_bar')
$('.hamburger_btn').addEventListener('click', () => {
    if(side_bar.style.right == '-120px') {
        side_bar.style.right = '0'
        return null
    }
    side_bar.style.right = '-120px'
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 500) {
        side_bar.style.right = '-120px'
    }
});
