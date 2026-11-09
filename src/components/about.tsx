import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)

const About = () => {

    function aboutAnimation ():gsap.core.Timeline {
        let aboutContainer = document.querySelector(".about")
        let aboutMe = document.querySelector(".about-me")
        let Lorem = document.querySelector(".about-lorem")
        let aboutImage = document.querySelector(".about-image")
        let aboutHi = document.querySelector(".about-hi")
        let description = document.querySelector(".about-description")
        let link = document.querySelector(".about-link")
        let duration = 0.7
        const matchmedia = gsap.matchMedia()
        const aboutTImeline = gsap.timeline()

        // mobile view animation
        matchmedia.add( " (max-width:799px) ", () => {
            aboutTImeline.from(aboutMe, {opacity:0, xPercent:-250,
                duration:duration, ease:"back"})
            aboutTImeline.from(Lorem, {opacity:0, y:80,})
            aboutTImeline.from(aboutImage, {opacity:0, y:80,})
            aboutTImeline.from(aboutHi, {opacity:0, y:80,})
            aboutTImeline.from(description, {opacity:0, y:80,})
            aboutTImeline.from(link, {opacity:0, scale:0.3, y:80,})
            

            // scroll triggered animation
            ScrollTrigger.create({
                animation: aboutTImeline,
                trigger: aboutContainer,
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: "restart none none reverse"
            })

        } );

        // desktop view animation
        matchmedia.add( " (min-width:800px) ", ()=> {
            gsap.defaults({duration:duration})
            aboutTImeline.from(aboutMe, {opacity:0, xPercent:-250,
                duration:duration, ease:"back"})
            aboutTImeline.from(Lorem, {opacity:0, y:80,})
            aboutTImeline.from(aboutImage, {opacity:0, y:80,})
            aboutTImeline.from(aboutHi, {opacity:0, y:80,},"<")
            aboutTImeline.from(description, {opacity:0, y:80,},"-=0.4")
            aboutTImeline.from(link, {opacity:0, scale:0.3, y:80,},"-=0.5")
            

            // scroll triggered animation
            ScrollTrigger.create({
                animation: aboutTImeline,
                trigger: aboutContainer,
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: "restart none none reverse"
            })

        } );

        return aboutTImeline;
    }

    useGSAP ( ()=> { aboutAnimation() }, [] )

  return (

    <div>
        {/* about me section */}
        <section id="about"
        className="min-h-screen h-auto p-6 text-dusty-grey about ">
            {/* about me heading */}
            <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
            lowercase tracking-widest text-left about-me
             "> [ 01 / about Me] </h2>
            {/* about description */}
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] about-lorem ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* container div for about content */}
            <div className="grid grid-cols-1 items-center justify-center
            gap-y-6 md:grid-cols-2 md:items-start gap-x-24 ">
                {/* image div */}
                <div className="h-[23rem] w-full bg-[url('/port3.jpeg')] bg-cover
                bg-[50%_20%] relative about-image ">
                    {/* top overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-brown
                    via-transparent to-transparent "></div>
                    {/* bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-brown
                    via-transparent to-transparent "></div>
                    {/* right overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-brown
                    via-transparent to-transparent "></div>
                    {/* left overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-charcoal-brown
                    via-transparent to-transparent "></div>
                </div>
                {/* text div */}
                <div className="font-ubuntu py-6 about-text ">
                    {/* greetings */}
                    <h2 className="font-kempt capitalize trackking-widest font-black
                    py-3 text-[24px] leading-[3rem] about-hi
                     ">hi i'm Frank Vincent</h2>
                    {/* about me */}
                    <p className="py-3 text-[18px] tracking-widest leading-[2rem]
                    about-description ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium ipsam voluptatum suscipit, nostrum laborum
                        neque ad asperiores? Numquam, ut commodi nostrum nihil
                        officia ipsam repellat dolore voluptatem assumenda iure,
                        saepe eius ad.
                    </p>
                    {/* work with me */}
                    <a href="#contacts"
                    className="inline-block my-4 bg-olive-leaf px-2 py-1 rounded-[.3rem]
                    font-thin about-link "
                    >let's work together!</a>
                </div>
            </div>
        </section>
    </div>

  )

}

export default About

