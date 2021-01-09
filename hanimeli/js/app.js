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