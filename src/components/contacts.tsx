import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)

const Contacts = () => {

    function contactAnimation ():gsap.core.Timeline {
        let constactSection = document.querySelector(".contact")
        let title = document.querySelector(".contact-title")
        let description = document.querySelector(".contact-description")
        let contactImage = document.querySelector(".image-div")
        let contactForm = document.querySelector(".contact-form")
        let duration = 0.7
        gsap.defaults({duration: duration})
        const matchmedia = gsap.matchMedia()
        const contactTimeline = gsap.timeline()
        .from(title, {opacity: 0, scale:0.3, xPercent:-250, ease:"back", duration:1})
        .from(description, {opacity: 0, y:80, ease:"bounce"})
        
        // mobile view animation
        matchmedia.add( "(max-width: 799px) ", ()=> {
            contactTimeline.from(contactImage, {opacity: 0, y:80, scale:0.3, ease:"back"})
            contactTimeline.from(contactForm, {opacity: 0, x:80, scale:0.3, ease:"back"})
        } )

        // desktop view animation
        matchmedia.add( " (min-width: 800px) ", ()=> {
            contactTimeline.from(contactImage, {opacity: 0, y:80, scale:0.3, ease:"back"})
            contactTimeline.from(contactForm, {opacity: 0, x:80, scale:0.3, ease:"back"},"<")
        } );

        // scroll triggered animation
        ScrollTrigger.create({
            animation: contactTimeline,
            trigger: constactSection,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "restart none none reverse"
        })
        
        return contactTimeline;
    }

    useGSAP ( ()=> { contactAnimation() }, [] )

  return (

    <div>
        {/* contacts section */}
        <section id="contacts"
        className="min-h-screen h-auto p-6 text-dusty-grey contact ">
            {/* heading */}
            <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
            lowercase tracking-widest text-left contact-title
             "> [ 04 / contacts] </h2>
            {/* about description */}
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] contact-description ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* contacts div container */}
            <div className="grid grid-cols-1 items-start gap-6
            md:grid-cols-2 md:gap-x-16 ">
                {/* image div */}
                <div className="image-div">
                    <img src="/port3.jpeg" alt="" 
                    className="aspect-square object-cover md:h-[30rem]
                    md:w-full rounded-[1rem] cursor-pointer hover:scale-103
                    transition-all duration-700 ease-in-out
                    object-top "/>
                </div>
                {/* contact form div */}
                <div className="contact-form">
                    <form action="#">
                        {/* name */}
                        <label htmlFor="name"
                        className='font-nunito uppercase flex flex-col gap-y-3 py-3 border-b
                        border-khaki-beige tracking-widest '
                        >your name
                            <input type="text" placeholder='Frank Vincent' required
                            className='outline-none border-none placeholder:text-olive-leaf
                            px-2 py-1 '
                            />
                        </label>
                        {/* email */}
                        <label htmlFor="email"
                        className='font-nunito uppercase flex flex-col gap-y-3 pt-8 border-b
                        border-khaki-beige tracking-wide'
                        >email address
                            <input type="email" placeholder='franknjolowelo@gmail.com' required
                            className='outline-none border-none placeholder:text-olive-leaf
                            px-2 py-1 '
                            />
                        </label>
                        {/* message */}
                        <div>
                            <p className='font-nunito uppercase pt-8 tracking-wide pb-2
                            '> project specifications</p>
                            <textarea name="message" id="message" cols={8} rows={5} required
                            placeholder='Tell us about the project type, it requirements and aesthetic expectations...'
                            className='border-b border-khaki-beige w-full px-2 py-1
                            placeholder:text-olive-leaf outline-none '
                            />
                        </div>
                        {/* send button */}
                        <button className='mt-4 bg-white text-black px-2 py-1 mb-6
                        rounded-[.5rem] font-black font-mono capitalize cursor-pointer '
                        >send message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Contacts

