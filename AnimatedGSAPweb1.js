function page1Animation(){
    let tl=gsap.timeline()
tl.from("nav h1,nav h4, nav, button",{
    y:-40,
    opacity:0,
    delay:1,
    duration:0.7,
    stagger:0.15,
})
tl.from(".centerpart1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
},"-=0.3")
tl.from(".centerpart1 p",{
    x:-200,
    opacity:0,
    duration:0.5,
},"-=0.3")
// tl.from(".centerpart1 button",{
//     opacity:0,
//     // duration:0.4,
// })
tl.from(".centerpart2 img",{
    opacity:0,
    duration:0.5,
},"-=1")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})
}
page1Animation()

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5,
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,

},"anim")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,

},"anin")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"anin")