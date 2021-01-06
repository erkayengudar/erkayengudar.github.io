// import * as $ from "jquery";
// import "TimelineLite.min.js";

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

const menuEffect = new TimelineLite({
    paused: true
});

menuEffect.to('.mobilMenuList', 0.1, {
    display:'flex',
    ease: Power2.easeOut
})
.to('.mobilMenuList', 0.5, {
    opacity: 1,
    ease: Power2.easeOut
})
var isMenuActive = false
$(".menuIcon").click(function (e) {
    if (isMenuActive){
        isMenuActive= false
        menuEffect.reverse()
    }else{
        isMenuActive= true
        menuEffect.play()
    }
})
$(".mobilMenuList a").click(function (e) {
    if (isMenuActive){
        isMenuActive= false
        menuEffect.reverse()
    }else{
        isMenuActive= true
        menuEffect.play()
    }
})