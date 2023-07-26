const navToggle = document.getElementById('nav__toggle')
const navMenu = document.getElementById('nav__menu')
const closeBtn = document.getElementById('nav__close')

// Validate if constants exist show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open')
    
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open')
    })
}

// When click on each nav__link, we remove the 'nav-open' class
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove('nav-open')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// When the scroll is greater than 80vh, add the 'scroll-header' class to header tag

function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

// Questions Accordion

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}
// Scroll sections active link
const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }

    })
}

window.addEventListener('scroll', scrollActive)

// Show scroll up

function scrollUp() {
    const scrollUp = document.getElementById('scrollup')
    if(this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }

}

window.addEventListener('scroll',scrollUp )


// Dark/ Light Theme

const themeBtn = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// Validating dark-theme class if the current theme or not
const getCurrentTheme =  () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme)? 'ri-moon-line': iconTheme

// Validate if the user previously chose a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'ri-moon-line'? 'add' : 'remove'](iconTheme)
}

// Active/ Deactive the theme manually with th button
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    // Save theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})





