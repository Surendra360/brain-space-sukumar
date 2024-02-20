
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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


function video() {
    gsap.to(".page1 video", {
        filter: "blur(20px)",
        transform: "scaleX(0.95)",
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            // markers:true,
            start: "top 0",
            end: "top -50%",
            scrub: true,
        }
    })
}
video()

// makking a cursor
function mouse() {
    document.addEventListener("mousemove", function (e) {
        gsap.to(".cursor", {
            top: e.y,
            left: e.x
        })
    })
    document.querySelector(".nav i").addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            scale: 2,
        })
    })
    document.querySelector(".nav i").addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            scale: 1,
        })
    })
}
mouse()

// nav h4 animation
function nav_h4() {
    gsap.to(".nav-part-2", {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: ".nav",
            scroller: ".main",
            start: "top 0",
            end: "top -10%",
            scrub: true,
        }
    })

}
nav_h4()
//nav icon

function nav_i() {
    gsap.to(".nav i", {

        display: "block",
        scrollTrigger: {
            trigger: ".nav",
            scroller: ".main",
            start: "top -15%",
            end: "top -20%",
            scrub: true

        }
    })
}
nav_i()

// ------------------- Page2 Content Animation ---------------------- //

function page2_img_scroll() {
    gsap.to(".page2 img", {
        transform: "translateY(-50%) translateX(53%)",
        duration: 10,
        repeat: -1,
        ease: "none"
    })
}
page2_img_scroll()

function page2_animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2-content",
            scroller: ".main",
            //markers:true,
            start: "top 70%",
            end: "top 0%",
            scrub: true,
        }
    })

    tl2.from(".right-page2 h1", {
        y: 60,
        duration: 1,
        opacity: 0,
        scale: 1.1,
    })
    tl2.from(".left-page2", {
        y: 60,
        duration: 1,
        opacity: 0,
        scale: 1.1,
    })
    tl2.from(".right-page2 p", {
        y: 60,
        duration: 2,
        opacity: 0,
        scale: 1.1,
    })
    tl2.from(".right-page2 button", {
        y: 60,
        duration: 2,
        opacity: 0,
        scale: 1.1,
    })
}
page2_animation()

// ------------------- Page3 Content Animation ---------------------- //

function page3_animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3-content",
            scroller: ".main",
            //markers:true,
            start: "top 60%",
            end: "top 0%",
            scrub: true,
        }
    })

    tl3.from(".left-page3 h1", {
        y: 60,
        duration: 1,
        opacity: 0,
        scale: 1.1,
    })
    tl3.from(".right-page3 img", {
        y: 60,
        duration: 2,
        opacity: 0,
        scale: 1.1,
    })
    tl3.from(".left-page3 p", {
        y: 60,
        duration: 2,
        opacity: 0,
        scale: 1.1,
    })
    tl3.from(".left-page3 button", {
        y: 60,
        duration: 2,
        opacity: 0,
        scale: 1.1,
    })
}
page3_animation()

// ------------------- Page4 Content Animation ---------------------- //

gsap.from(".page4 .helmet", {
    y: 50,
    opacity: 0,
    scale: 0.1,
    scrollTrigger: {
        trigger: ".helmet",
        scroller: ".main",
       // markers: true,
        start: "top 120%",
        end: "top 80%",
        scrub: true
    }
})

function p4_con1_Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content1",
            scroller: ".main",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    })

    tl4.from(".page4-content1 h2", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    })
    tl4.from(".page4-content1 p", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    })
    tl4.from(".page4-content1 button", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    })
}
p4_con1_Animation()

function p4_con2_Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content2",
            scroller: ".main",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    })
    tl4.from(".page4-content2 h5", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con2")
    tl4.from(".page4-content2 video", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con2")
}
p4_con2_Animation()

function p4_con3_Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content3",
            scroller: ".main",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    })
    tl4.from(".page4-content3 h5", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con3")
    tl4.from(".page4-content3 video", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con3")
    tl4.from(".page4-content3 button", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    })  
}
p4_con3_Animation()

function p4_con4_Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content4",
            scroller: ".main",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    })
    tl4.from(".page4-content4 h5", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con2")
    tl4.from(".page4-content4 video", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con2")
}
p4_con4_Animation()

function p4_con5_Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content5",
            scroller: ".main",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    })
    tl4.from(".page4-content5 h5", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con3")
    tl4.from(".page4-content5 video", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    }, "con3")
    tl4.from(".page4-content5 button", {
        y: 80,
        opacity: 0,
        scale: 1.15,
    })  
}
p4_con5_Animation()

// ------------------- Page5 Content Animation ---------------------- //

function page5() {
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".page5",
            scroller:".main",
            start:"top 0",
            end:"top -80%",
            scrub:3,
            pin:true
        }
    
    })
    tl5.to(".page5-content",{
        transform:"translateX(-70%)",
    },"p5-con")
    tl5.to(".slider-in",{
        x:670
    },"p5-con")
    
}
page5()


var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6-content",
        scroller:".main",
        //markers:true,
        start: "top 70%",
        end: "top 0%",
        scrub: true
    }
})

tl6.from(".page6-content1 h1",{
        y: 80,
        opacity: 0,
        scale: 1.15,
})
tl6.from(".page6-content1-data h5",{
        y: 80,
        opacity: 0,
        scale: 1.15,
},"s1")
tl6.from(".page6-content1-data-list",{
        y: 80,
        opacity: 0,
        scale: 1.15,
},"s1")



var tl61 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6-content2",
        scroller:".main",
       // markers:true,
        start: "top 70%",
        end: "top 0%",
        scrub: true
    }
})

tl61.from(".page6-content2-data1",{
    opacity:0,
    scaleX:1.5
})

var tl62 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6-content2 p",
        scroller:".main",
       // markers:true,
        start: "top 100%",
        end: "top 50%",
        scrub: true
    }
})
tl62.from(".page6-content2 p",{
    y: 80,
    opacity: 0,
    scale: 1.15,
})
tl62.from(".page6-content2 button",{
    y: 80,
    x:-40,
    opacity: 0,
    scale: 1.15,
})



var tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-content1",
        scroller:".main",
      // markers:true,
        start: "top 100%",
        end: "top 50%",
        scrub: true
    }
})
tl7.from(".page7-content1 h1",{
    y: 80,
    opacity: 0,
    scale: 1.15,
})
tl7.from(".page7-content1 p",{
    y: 80,
    opacity: 0,
    scale: 1.15,
},"s2")
tl7.from(".page7-content1 img",{
    y: 80,
    opacity: 0,
    scale: 1.15,
},"s2")


var tl71 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-content2, .page7 button",
        scroller:".main",
      // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl71.from(".page7-content2-list1",{
    y: 80,
    opacity: 0,
    scale: 1.15,
})
tl71.from(".page7-content2-list2",{
    y: 80,
    opacity: 0,
    scale: 1.15,
})
tl71.from(".page7 button",{
    y: 80,
    x:-40,
    opacity: 0,
    scale: 1.15,
})


var tl72 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-second-content1-data, .page7-second-content2 ul",
        scroller:".main",
       //markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl72.from(".page7-second-content1-data h1",{
    y: 90,
    opacity: 0,
    scale: 1.15,
},"s3")
tl72.from(".page7-second-content1-data-right",{
    y: 90,
    opacity: 0,
    scale: 1.15,
},"s3")



var tl73 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-second-content2 ul, .page7-second-content2 ul li span",
        scroller:".main",
       //markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl73.from(".page7-second-content2 ul",{
    y:90,
    opacity: 0,
    scale: 1.15,
})



var tl74 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-second-content3",
        scroller:".main",
       //markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl74.from(".page7-second-content3-data h1",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl74.from(".page7-second-content3-data p",{
    y:90,
    opacity: 0,
    scale: 1.15,
},"s4")
tl74.from(".page7-second-content3-image",{
    y:90,
    opacity: 0,
    scale: 1.15,
},"s4")

var tl74 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7-second-content4-data",
        scroller:".main",
       //markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})

tl74.from(".page7-second-content4-text h1",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl74.from(".page7-second-content4-text p",{
    y:90,
    opacity: 0,
    scale: 1.15,
},"s5")
tl74.from(".page7-second-content4-text a",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl74.from(".page7-second-content4-data video",{
    y:90,
    opacity: 0,
    scale: 1.15,
},"s5")



var tl8 = gsap.timeline({
    scrollTrigger:{
        trigger:".page8",
        scroller:".main",
      // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl8.from(".page8 ul",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl8.from(".page8 p",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl8.from(".page8 button",{
    y:90,
    x:-40,
    opacity: 0,
    scale: 1.15,
})


var tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:".page9-content",
        scroller:".main",
      // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl9.from(".page9-content-text h1",{
    y:90,
    opacity: 0,
    scale: 1.15,
})
tl9.from(".page9-content-text p",{
    y:90,
    opacity: 0,
    scale: 1.15,
})


var tl10 = gsap.timeline({
    scrollTrigger:{
        trigger:".nasa",
        scroller:".main",
      // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})
tl10.from(".nasa img",{
    y:90,
    opacity: 0,
    scale: 1.15,
})



var p7 = document.querySelector(".page7-second")

var p7sec = document.querySelector(".page7-second-content2")

p7sec.addEventListener("mousemove", function(e){
    p7.style.background = `conic-gradient(from 176.66deg at ${e.x}px ${e.y}px, #FFC3BE 0deg, #CED2FB 39.19deg, #C5E3FF 95.62deg, #BEEFF8 150.61deg, #B7F9F0 208.13deg, #F7FFC7 253.13deg, #FFE7D2 300deg, #FFD6CE 328.25deg, #FFC3BE 360deg), conic-gradient(from 176.66deg at ${e.x}px ${e.y}px, #E7E2F0 0deg, #95BFE8 39.19deg, #A3DEFF 104.7deg, #77A8F4 150.61deg, #6C89F0 210.89deg, #DAD4D4 272.3deg, #FFBBB4 314.64deg, #EFD4DB 328.25deg, #E7E2F0 360deg)`});






var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})