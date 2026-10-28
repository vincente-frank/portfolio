import { useState } from "react"
import Questions from "../utils/questions"
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react"




const FAQ = () => {

    const [active, setActive] = useState<number | null>(null)

  return (

    <div>
        {/* faq section */}
        <section className="min-h-screen h-auto p-6 text-dusty-grey ">
            {/* about me heading */}
            <h2 className="font-glitch font-thin pt-12 pb-3 text-[26px]
            capitalize tracking-widest text-left md:text-center md:text-[4rem]
             "> frequently asked questions </h2>
            {/* about description */}
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] md:text-center md:text-[32px] md:leading-[3rem]
            md:px-[4rem] ">
                The key information about our process, collaboration and
                outcomes before you start a project.
            </p>
            {/* faq questiond div container */}
            <div className="grid grid-cols-1 items-center justify-center
            md:px-[12rem] ">
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

