import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)

const Concept = () => {
    const conceptRef = useRef<HTMLElement | null>(null)
    const descriptionRef = useRef<HTMLParagraphElement | null>(null)

    function conceptAnimation() {
        let title = document.querySelector(".concept-title")
        const concept = conceptRef.current || document.querySelector<HTMLElement>(".concept")
        const description = descriptionRef.current || document.querySelector<HTMLParagraphElement>(".concept-description")

        if (!concept || !description) return

        const split = SplitText.create(description, {
            type: "words",
            tag: "span",
            wordsClass: "inline-block will-change-[transform,opacity,filter]",
        })

        const duration = 2

        const tl = gsap.timeline()
        .from(title, {opacity:0, xPercent:250, duration:0.7})
            .fromTo(
                split.words,
                {
                    color: "#4E502C", // muted olive-leaf
                    opacity: 0.2,
                    y: 10,
                    filter: "blur(4px)",
                    scale: 0.98,
                },
                {
                    color: "#D3D5D2", // bright dusty-grey
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: duration,
                    stagger: {
                        each: 0.08,
                        ease: "power1.out",
                    },
                    ease: "power2.out",
                }
            )
            // Buffer hold at the end so the user can read the fully revealed text before unpinning
            .to({}, { duration: 0.3 })

        ScrollTrigger.create({
            animation: tl,
            trigger: concept,
            start: "top top",
            end: "+=1200",
            pin: true,
            scrub: 1,
        })

        return { tl, split }
    }

    useGSAP(() => {
        const result = conceptAnimation()
        return () => {
            result?.split.revert()
        }
    }, [])

    return (
        <div>
            {/* concept section */}
            <section
            ref={conceptRef}
            className="min-h-screen flex flex-col justify-center
            p-6 text-dusty-grey text-right concept ">
            <p className="text-left font-glitch py-12 font-thin
            tracking-widest text-[32px] leading-[2.6rem]
            concept-title">Small, senior-level product team.</p>
            <p
            ref={descriptionRef}
            className="text-[1.8rem] leading-[3rem] text-olive-leaf
            concept-description ">
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


