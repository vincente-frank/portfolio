import gsap from "gsap"
import Navigation from "./navigation"
import { useGSAP } from "@gsap/react"




const Hero = () => {

  function heroAnimation ():gsap.core.Timeline {
    let hero = document.querySelector(".hero")
    let creative = document.querySelector(".creative")
    let brand = document.querySelector(".brand")
    let possibilities = document.querySelector(".new")
    let description = document.querySelector(".description")
    let link = document.querySelector(".link")
    let duration = 0.7
    const matchmedia = gsap.matchMedia()
    const heroTimeline = gsap.timeline()
    // mobile view animation
    matchmedia.add("(max-width: 799px)", () => {

    heroTimeline.set(hero, {autoAlpha:1})
    heroTimeline.from(creative, {opacity:0, xPercent:-100, duration:duration,
      ease: "slow(0.7 0.7)"
    })
    heroTimeline.from(possibilities, {opacity:0, xPercent:100, duration:duration,
      ease:"back"},"-=0.4")
    heroTimeline.from(brand, {opacity:0, xPercent:-100, duration:duration,
      ease:"back"},"<")
    heroTimeline.from(description, {opacity:0, duration:duration, y:80,
        ease:"bounce"},"-=0.4")
    heroTimeline.from(link, {opacity:0, scale:0.3, x:200, duration:duration,
         ease:"back"},"-=0.5")
    } );

    // desktop view animation
    matchmedia.add( "(min-width: 800px)", () => {

    heroTimeline.set(hero, {autoAlpha:1})
    heroTimeline.from(creative, {opacity:0, xPercent:-100, duration:duration,
      ease: "slow(0.7 0.7)"
    })
    heroTimeline.from(possibilities, {opacity:0, xPercent:100, duration:duration,
      ease:"back"},"-=0.4")
    heroTimeline.from(brand, {opacity:0, xPercent:-100, duration:duration,
      ease:"back"},"<")
    heroTimeline.from(description, {opacity:0, duration:duration, y:80,
        ease:"bounce"},"-=0.4")
    heroTimeline.from(link, {opacity:0, scale:0.3, x:200, duration:duration,
         ease:"back"},"-=0.5")

    } );

    return heroTimeline;
  }

  useGSAP ( ()=> { heroAnimation() }, [] )

  return (

    <div>

        {/* hero section */}
        <section id="hero"
        className="p-6 min-h-screen h-auto hero bg-[url('/her02.webp')]
        relative bg-cover bg-center " >
          {/* the overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
          from-charcoal-brown via-charcoal-brown/50
          to-transparent md:via-transparent "></div>
            {/* navigation component */}
            <Navigation/>
            {/* content container div */}
            <div className="flex items-start justify-start flex-col
            gap-y-8 pt-32 text-dusty-olive font-charon md:flex-row
            md:gap-x-12 ">
            {/* the left content div */}
            <div className="left-content">
                {/* creative developer */}
                <p className="text-dusty-grey font-kempt text-[14px] py-3
                uppercase font-thin tracking-widest creative
                 "> creative developers</p>
                {/* hero title */}
                <h1 className="py-3 text-[18px] capitalize font-thin font-glitch
                tracking-widest leading-[2rem] md:text-[2.8rem] md:leading-[4rem]
                md:py-4 md:pr-[12rem] title ">
                <span className="inline-block new text-white saturate-200
                ">new possibilities for</span>
                <span className="inline-block text-khaki-beige saturate-200
                brand ">&nbsp;ambitious brands</span>
                </h1>
                {/* hero description in smaller devices */}
                <p className="py-3 text-[16px] leading-[2rem] md:text-[30px]
                md:leading-[3rem] md:py-4 md:hidden description " >
                We create <span className="inline-block text-white 
                saturate-200 font-thin tracking-widest font-glitch
                ">modern</span> software that strengthen
                your image, attract clients and turn your business
                goals into real growth.
                </p>

                {/* hero description in medium to larger devices */}
                <p className="py-3 text-[16px] leading-[2rem] md:text-[30px]
                md:leading-[3rem] md:py-4 hidden md:block description " >
                We create <span className="inline-block text-white 
                saturate-200 font-thin tracking-widest font-glitch
                ">modern</span> software that strengthen
                your image, <br /> attract clients and turn your business
                goals into <br /> real growth.
                </p>

                {/* start a project */}
                <a href="#together"
                className="bg-khaki-beige px-2 py-1 rounded-[.2rem] text-charcoal-brown
                font-black inline-block my-6 text-[18px] md:text-[20px] link "
                > start a project </a>
            </div>
            
           
            </div>

        </section>

    </div>

  )

}

export default Hero
