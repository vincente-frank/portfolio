import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"



const Navigation = () => {

    const [menu, setMenu] = useState<boolean>(false)

    function navAnimation ():gsap.core.Timeline {
        let nav = document.querySelectorAll(".nav")
        let duration = 0.7
        const timeline = gsap.timeline()
        .from(nav, {y:-80, duration:duration, ease:"none"})
        return timeline;
    }

    useGSAP ( ()=> { navAnimation() }, [] )

  return (

    <div>
        {/* navigation on smaller screens */}
        <section className="h-14 bg-dusty-grey/10 flex items-center
        justify-between px-2 rounded-[.5rem] backdrop-blur-3xl border
        md:hidden border-khaki-beige m-0 fixed top-3 left-6 right-6
        z-10 mt-6 nav ">
            {/* logo div */}
            <div>
                <h1 className="font-glitch tracking-widest
                text-lg text-white ">
                    <span className="text-[1.4rem]">v</span>
                    <span>injo.</span>
                </h1>
            </div>
            {/* changing icons logic div */}
            <div className="bg-charcoal-brown rounded-full
            text-dusty-grey p-2 ">
                { menu ? (
                    <XIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer size-6 " />
                ):(
                    <MenuIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer size-6 " />
                ) }
            </div>
        </section>
        {/* navigation drawer to smaller screen devices */}
        { menu && (
            <div className="bg-charcoal-brown/20 h-auto border-b z-10
            border-khaki-beige fixed top-[5.9rem] left-6 right-6
            backdrop-blur-3xl ">
                <nav className="flex flex-col items-start justify-start
                p-6 text-dusty-grey capitalize ">
                    <a href="#hero" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] py-1 ">home</a>
                    <a href="#services" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] py-1 ">services</a>
                    <a href="#projects" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] py-1 ">works</a>
                    <a href="#faq" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] py-1 ">faq</a>
                    <a href="#footer" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] py-1 ">get in touch</a>
                    <a href="#together" onClick={ ()=> setMenu(!menu) }
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] bg-charcoal-brown px-2 py-1
                    rounded-[.3rem] saturate-200
                    my-3 ">start a project</a>
                </nav>
            </div>
        ) }

        {/* navigation on medium to larger screens */}
        <section className="bg-dusty-grey/10 md:flex items-center
        justify-between px-3 rounded-[.5rem] backdrop-blur-xl hidden
        m-0 border border-khaki-beige text-dusty-olive fixed left-6
        right-6 z-10 nav h-16 ">
            {/* logo div */}
            <div>
                <h1 className="font-glitch tracking-widest
                text-lg text-white ">
                    <span className="text-[1.4rem]">v</span>
                    <span>injo.</span>
                </h1>
            </div>
            {/* navigation div */}
            <div>
                <nav className="flex items-center justify-center gap-6
                p-6 text-dusty-olive capitalize ">
                    <a href="#hero"
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] ">home</a>
                    <a href="#services"
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] ">services</a>
                    <a href="#projects"
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] ">works</a>
                    <a href="#faq"
                    className="font-black tracking-wide font-ubuntu
                    text-[20px] uppercase ">faq</a>
                </nav>
            </div>
            {/* contact me div */}
            <div className="flex gap-6 items-center ">
                <a href="#together"
                className="font-black tracking-wide font-ubuntu
                text-[20px] bg-charcoal-brown px-2 py-1
                rounded-[.3rem] saturate-200
                my-3 ">start a project</a>
            </div>
        </section>
    </div>

  )

}

export default Navigation

