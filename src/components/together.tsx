import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)

const Together = () => {

    function togetherAnimation ():gsap.core.Timeline {
        let togetherSection = document.querySelector(".together")
        let business = document.querySelector(".business")
        let title = document.querySelector(".together-title")
        let description = document.querySelector(".together-description")
        let inTouch = document.querySelector(".together-intouch")
        let explore = document.querySelector(".together-explore")
        let duration = 0.7
        gsap.defaults({duration: duration})
        const togetherTimeline = gsap.timeline()
        .from(business, {opacity: 0, scale:0.3, y:80, ease:"back", duration:1})
        .from(title, {opacity: 0, y:80})
        .from(description, {opacity: 0, y:80, ease:"bounce"})
        .from(inTouch, {opacity: 0, x:-80, scale:0.3, ease:"back"})
        .from(explore, {opacity: 0, x:80, scale:0.3, ease:"back"})

        // scroll triggered animation
        ScrollTrigger.create({
            animation: togetherTimeline,
            trigger: togetherSection,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "restart none none reverse"
        })

        return togetherTimeline;
    }

    useGSAP ( ()=> { togetherAnimation() }, [] )

  return (

    <div>
        {/* together section */}
        <section id="together"
        className="min-h-screen h-auto p-6 bg-[url('/mountains.jpg')]
        bg-cover bg-center md:bg-fixed relative text-dusty-grey m-4
        rounded-[1rem] together ">
            {/* the overlay */}
            <div className="absolute inset-0 bg-gradient-to-t rounded-[1rem]
            from-olive-leaf via-olive-leaf/40 to-olive-leaf/20 "></div>
            {/* the content */}
            <div className="relative flex flex-col items-center justify-center
            pt-[9rem] md:pt-[7rem] ">
                <h2 className="font-glitch uppercase tracking-[.3rem] text-center
                py-3 leading-[2.5rem] font-thin text-[24px] md:text-[4rem]
                md:leading-[5rem] text-dusty-grey business
                 ">your business deserves more</h2>
                <h1 className="font-thin py-3 text-[18px] tracking-[.2rem]
                text-center md:text-[35px] md:font-black together-title
                 ">Let's create together</h1>
                <p className="py-3 tracking-widest md:text-[26px] md:px-[4rem]
                text-center together-description ">
                    Tell us about your project and let's see how
                    we can help your business grow.
                </p>
                <div className="py-3 flex gap-6 md:py-5 ">
                    <a href="#contacts"
                    className="bg-charcoal-brown px-2 py-1 rounded-[.2rem]
                    together-intouch "
                    >get in touch</a>
                    <a href="#services"
                    className="outline outline-offset-0 outline-khaki-beige
                    px-2 py-1 rounded-[.2rem] together-explore "
                    >explore services</a>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Together

