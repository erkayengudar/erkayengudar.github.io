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
    ease: Power2.easeOut
})
.to(".topBanner", 0, {
    paddingTop: '60px',
    ease: Power2.easeOut
})

function scrollTopMenu() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topMenuEffect.play()
  } else {
    topMenuEffect.reverse()
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
var person1 = $("#person1")
var person2 = $("#person2")
var person3 = $("#person3")

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

