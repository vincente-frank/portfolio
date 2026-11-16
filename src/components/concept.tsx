import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"



gsap.registerPlugin(ScrollTrigger, SplitText)

const Concept = () => {

    function conceptAnimation ():gsap.core.Timeline {
        let concept = document.querySelector(".concept")
        let description = document.querySelector(".concept-description")
        let split = SplitText.create(description, {type:"lines"})
        let duration = 0.7
        let stagger = 0.05
        const tl = gsap.timeline()
        .to(split.lines, {color:"red", duration:duration,
            stagger:stagger})

        ScrollTrigger.create({
            animation: tl,
            trigger: concept,
            start: "top 80%",
            end: "top 10%",
            toggleActions: "restart none none reverse"
        })

        return tl;
    }

    useGSAP( ()=> { conceptAnimation() }, [] )

  return (

    <div>
        {/* concept section */}
        <section className="min-h-screen h-auto p-6 text-dusty-grey
        text-right concept ">
            <p className="pt-48 text-[1.8rem] leading-[3rem]
            text-olive-leaf concept-description ">
                From concept to launch, we
                bring product visions to
                life through comprehensive
                development strategies and
                advanced technologies.
            </p>
        </section>
    </div>

  )

}

export default Concept

