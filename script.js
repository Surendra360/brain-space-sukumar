function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

function video() {
    gsap.to(".page1 video",{
        filter:"blur(20px)",
        transform:"scaleX(0.95)",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
           // markers:true,
            start:"top 0",
            end:"top -50%",
            scrub:true,
        }
    })
}
video()

// makking a cursor
function mouse() {
    document.addEventListener("mousemove", function(e) {
        gsap.to(".cursor",{
            top:e.y,
            left:e.x
        })
    })
    document.querySelector(".nav i").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:2,
        })
    })
    document.querySelector(".nav i").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:1,
        })
    })
}
mouse()

// nav h4 animation
function nav_h4(){
    gsap.to(".nav-part-2",{
        y:-100,
        duration:1,
        scrollTrigger:{
            trigger:".nav",
            scroller:".main",
            start:"top 0",
            end:"top -10%",
            scrub:true,
        }
    })
    
}
nav_h4()
//nav icon

function nav_i(){
    gsap.to(".nav i",{

        display:"block",
        scrollTrigger:{
            trigger:".nav",
            scroller:".main",
            start:"top -15%",
            end:"top -20%",
            scrub:true
    
        }
    })
}
nav_i()

// ------------------- Page2 Content Animation ---------------------- //

function page2_img_scroll(){
    gsap.to(".page2 img",{
        transform:"translateY(-50%) translateX(53%)",
        duration:10,
        repeat:-1,
        ease:"none"
    })
}
page2_img_scroll()

function page2_animation() {
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2-content",
            scroller:".main",
            //markers:true,
            start:"top 90%",
            end:"top 20%",
            scrub:true,
        }
    })
    
    tl2.from(".right-page2 h1",{
        y:60,
        duration:1,
        opacity:0,
        scale:1.1,
    })
    tl2.from(".left-page2",{
        y:60,
        duration:1,
        opacity:0,
        scale:1.1,
    })
    tl2.from(".right-page2 p",{
        y:60,
        duration:2,
        opacity:0,
        scale:1.1,
    })
    tl2.from(".right-page2 button",{
        y:60,
        duration:2,
        opacity:0,
        scale:1.1,
    })
}
page2_animation()

// ------------------- Page3 Content Animation ---------------------- //

function page3_animation() {
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3-content",
            scroller:".main",
            //markers:true,
            start:"top 60%",
            end:"top 20%",
            scrub:true,
        }
    })
    
    tl3.from(".left-page3 h1",{
        y:60,
        duration:1,
        opacity:0,
        scale:1.1,
    })
    tl3.from(".right-page3 img",{
        y:60,
        duration:2,
        opacity:0,
        scale:1.1,
    })
    tl3.from(".left-page3 p",{
        y:60,
        duration:2,
        opacity:0,
        scale:1.1,
    })
    tl3.from(".left-page3 button",{
        y:60,
        duration:2,
        opacity:0,
        scale:1.1,
    })
}
page3_animation()

// ------------------- Page4 Content Animation ---------------------- //

gsap.from(".page4 .helmet",{
    y:50,
    opacity:0,
    scale:0.1,
    scrollTrigger:{
        trigger:".helmet",
        scroller:".main",
        markers:true,
        start:"top 120%",
        end:"top 80%",
        scrub:true
    }
})
