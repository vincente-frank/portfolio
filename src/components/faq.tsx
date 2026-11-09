import { useState } from "react"
import Questions from "../utils/questions"
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {

    const [active, setActive] = useState<number | null>(null)

    function faqAnimation ():gsap.core.Timeline {
        let faqSection = document.querySelector(".faq")
        let title = document.querySelector(".faq-title")
        let description = document.querySelector(".faq-description")
        let faqContainer = document.querySelector(".faq-container")
        let duration = 0.7
        gsap.defaults({duration:duration})
        const faqTimeline = gsap.timeline()
        .from(title, {opacity:0, y:80, ease:"back"})
        .from(description, {opacity:0, y:80})
        .from(faqContainer, {opacity:0, y:80})

        // scroll triggered animation
        ScrollTrigger.create({
            animation: faqTimeline,
            trigger: faqSection,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "restart none none reverse"
        })
        return faqTimeline;
    }

    useGSAP ( ()=> { faqAnimation() }, [] )

  return (

    <div>
        {/* faq section */}
        <section id="faq"
        className="min-h-screen h-auto p-6 text-dusty-grey faq ">
            {/* about me heading */}
            <h2 className="font-glitch font-thin pt-12 pb-3 text-[26px]
            capitalize tracking-widest text-left md:text-center md:text-[4rem]
            faq-title "> frequently asked questions </h2>
            {/* about description */}
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] md:text-center md:text-[32px] md:leading-[3rem]
            md:px-[4rem] faq-description ">
                The key information about our process, collaboration and
                outcomes before you start a project.
            </p>
            {/* faq questiond div container */}
            <div className="grid grid-cols-1 items-center justify-center
            md:px-[12rem] faq-container ">
                {/* map trhough the questions array  */}
                { Questions.map( (question, index) => (
                    <div key={question.id}>
                        {/* the question and icon div container */}
                        <div className="flex items-center justify-between
                        py-3 border border-olive-leaf rounded-[1rem] px-4 ">
                            {/* the question */}
                            <p className="leading-[2rem] md:text-[28px] md:leading-[2.5rem]
                             "> {question.question} </p>
                            {/* the icons */}
                            <div>
                                {active == index ? (
                                    <PlusCircleIcon onClick={ ()=> setActive(null) }
                                    className="cursor-pointer md:size-10 "/>
                                ):(
                                    <MinusCircleIcon onClick={ ()=> setActive(index) }
                                    className="cursor-pointer md:size-10 "/>
                                ) }
                            </div>
                        </div>
                        {/* answer div */}
                        <div className="py-3 md:pb-5 ">
                            { active == index && (
                                <p className="tracking-widest leading-[2rem] md:text-[26px]
                                border-b pb-2 border-olive-leaf md:leading-[3rem] "> {question.answer} </p>
                            ) }
                        </div>
                    </div>
                ) ) }
            </div>

        </section>
    </div>

  )

}

export default FAQ

