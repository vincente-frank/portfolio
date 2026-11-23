import { useForm } from "@formspree/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)

const Contacts = () => {

    // form spree configuration
    const [state, handleSubmit] = useForm('xnpdodar');
    if (state.succeeded) {
        return (
            <div>
                <p>form submitted well well</p>
            </div>
        )
    }

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

      {/* SVG clip definition */}
      <svg
        className="absolute h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath
            id="heroBlob"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M 0.18 0.07
                C 0.38 0.00, 0.72 0.00, 0.88 0.07
                C 1.00 0.14, 1.00 0.30, 0.97 0.43
                C 0.93 0.56, 0.78 0.63, 0.66 0.73
                C 0.57 0.81, 0.48 0.93, 0.38 1.00
                C 0.24 1.00, 0.13 0.86, 0.09 0.68
                C 0.05 0.50, 0.10 0.27, 0.18 0.07
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

        {/* contacts section */}
        <section id="contacts"
        className="min-h-screen h-auto p-6 text-dusty-grey contact ">
        {/* heading */}
        <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
        lowercase tracking-widest text-left contact-title
        "> [ 04 / contacts] </h2>
        {/* about description */}
        <p className="pt-3 pb-16 tracking-widest leading-[2rem]
        text-left text-[18px] md:pr-[38rem] md:text-[24px]
         md:leading-[3rem] contact-description ">
        Have a project in mind or a question for our team?
        Send us a message and we will get back to you
        within a minute.
        </p>

        {/* contacts div container */}
        <div className="grid grid-cols-1 items-start gap-6
        md:grid-cols-2 md:gap-x-16 ">

        {/* the image content div */}
        <div className="relative w-full -ml-[5%] image-div">
            <div
            className="aspect-[1.1/1] w-full"
            style={{
            clipPath: "url(#heroBlob)",
            }}
            >
                <img
                src="/vinjo-logo.svg"
                alt="Creative developer working"
                className="h-full w-full object-cover"
                />
            </div>

        </div>
                
        {/* contact form div */}
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
            {/* name */}
            <label htmlFor="name"
            className='font-nunito uppercase flex flex-col gap-y-3 py-3 border-b
            border-khaki-beige tracking-widest '
            >your name
            <input type="text" placeholder='Frank Vincent'
            required name="name"
            className='outline-none border-none
            placeholder:text-olive-leaf px-2 py-1 '
            />
            </label>
            {/* phone number */}
            <label htmlFor="phone number"
            className='font-nunito uppercase flex flex-col gap-y-3 py-3 border-b
            border-khaki-beige tracking-widest '
            >phone number
            <input type="number" placeholder='+2557 66 355 608'
            required name="phone number"
            className='outline-none border-none
            placeholder:text-olive-leaf px-2 py-1 '
            />
            </label>
            {/* email */}
            <label htmlFor="email"
            className='font-nunito uppercase flex flex-col gap-y-3 pt-8 border-b
            border-khaki-beige tracking-wide'
            >email address
            <input type="email" placeholder='franknjolowelo@gmail.com'
            required name="email"
            className='outline-none border-none
            placeholder:text-olive-leaf px-2 py-1 '/>
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
            <button type="submit" disabled={state.submitting}
            className='mt-4 bg-white text-black px-2 py-1 mb-6
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

