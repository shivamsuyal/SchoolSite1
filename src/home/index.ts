import "../css/home.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger)
new Glide('.glide',{
    type: 'carousel',
    autoplay: 5000,
    hoverpause: false,
    animationDuration: 3000
}).mount()

const glideTimeline = gsap.timeline({
    scrollTrigger:{
        trigger:"#homePage",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        // markers: true,
        pin: true
    },
})

glideTimeline
    .to("nav",{
        y:0
    })
    .to("#sideRectangle-wapper",{
        x: 0
    },"<")










