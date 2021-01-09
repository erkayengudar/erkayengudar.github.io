//when clicked site logo
var logo = document.querySelector(".logo")

logo.addEventListener('click', function () {
    location.replace("#")
})

//when clicked downArrow Button
var downArrow = document.querySelector(".downArrow")

downArrow.addEventListener('click', function () {
    location.replace("#hizmetlerimiz")
})

//when clicked Whatsapp Button
var whatsappButton = document.querySelector(".whatsapp")

whatsappButton.addEventListener('click', function () {
    location.replace("https://wa.me/905425396500")
})

//when clicked phone call button

var phone = document.querySelector(".phone")

phone.addEventListener('click', function () {
    location.replace("tel:905425396500")
})


//Mobile menu effect

var menuIcon = document.querySelector(".menuIcon")
var menuLinks = document.querySelector(".mobileMenu a")

const menuEffects = new TimelineLite({
    paused: true
})


menuEffects.to(".mobileMenu", 0, {
    display: 'flex'
})
.to(".mobileMenu", 0.5, {
    right: '20px',
    left: '20px',
    ease: Power2.easeOut
})
var menuOn = false
menuIcon.addEventListener('click', function () {

    if (menuOn) {
        menuOn = false
        menuEffects.reverse()
    } else {
        menuOn = true
        menuEffects.play()
    }
})
menuLinks.addEventListener('click', function () {
    menuEffects.reverse()
    menuOn = false
})