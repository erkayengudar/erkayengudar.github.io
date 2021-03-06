// import * as $ from "jquery";
// import "TimelineLite.min.js";





//when page is scrolled, topmenu will be fixed

window.onscroll = function() {scrollTopMenu()};

const topMenuEffect = new TimelineLite({
    paused: true
});

topMenuEffect.to("#topMenu", 0, {
    position: 'fixed',
    ease: Power2.easeOut
})
.to("#topMenu", 0, {
    boxShadow: '0px 0px 25px black',
    height: '0px',
    ease: Power2.easeOut
})
.to(".topBanner", 0, {
    paddingTop: '60px',
    ease: Power2.easeOut
})
.to("#topMenu", 0.5,{
    height: "60px",
    ease: Power2.easeOut
})

function scrollTopMenu() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    if(screen.width > 800){
        topMenuEffect.play()
    }
    
  } else {
    if(screen.width > 800){
        topMenuEffect.reverse()
    }
  }
}


//Mobile menu effects
const menuEffect = new TimelineLite({
    paused: true
});

menuEffect.to("#topMenu", 0.5, {
    height: '100vh',
    ease: Power2.easeOut
})
var isMenuActive = false

function Menu(){
    if (isMenuActive){
        isMenuActive= false
        menuEffect.reverse()
    }else{
        isMenuActive= true
        menuEffect.play()
    }
}
$(".menuIcon").click(function (e) {
    Menu()
})
$(".mobileMenuList a").click(function (e) {
    Menu()
})


//who are we? effects
var person1 = $("#person1 *, person1")
var person2 = $("#person2 *, person2")
var person3 = $("#person3 *, person3")

person1.hover(function () {
    person2.css("filter", "blur(8px)")
    person3.css("filter", "blur(8px)")
})
person1.mouseout(function () {
    person2.css("filter", "blur(0px)")
    person3.css("filter", "blur(0px)")
})

person2.hover(function () {
    person1.css("filter", "blur(8px)")
    person3.css("filter", "blur(8px)")
})
person2.mouseout(function () {
    person1.css("filter", "blur(0px)")
    person3.css("filter", "blur(0px)")
})

person3.hover(function () {
    person2.css("filter", "blur(8px)")
    person1.css("filter", "blur(8px)")
})
person3.mouseout(function () {
    person2.css("filter", "blur(0px)")
    person1.css("filter", "blur(0px)")
})


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}