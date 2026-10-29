import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"



const Navigation = () => {

    const [menu, setMenu] = useState<boolean>(false)

  return (

    <div>
        {/* navigation on smaller screens */}
        <section className="h-auto bg-dusty-grey/10 flex items-center
        justify-between p-2 rounded-[.5rem] backdrop-blur-3xl border
        md:hidden border-khaki-beige m-0 fixed top-3 left-6 right-6
        z-10 ">
            {/* logo div */}
            <div>
                <h1 className="font-black capitalize font-nunito
                tracking-widest text-dusty-olive ">
                    <span>frank</span>
                    <span>&nbsp;vincent</span>
                </h1>
            </div>
            {/* changing icons logic div */}
            <div className="bg-charcoal-brown rounded-full text-dusty-grey
            p-2 ">
                { menu ? (
                    <XIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer" />
                ):(
                    <MenuIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer" />
                ) }
            </div>
        </section>
        {/* navigation drawer to smaller screen devices */}
        { menu && (
            <div className="bg-charcoal-brown/20 h-auto border-b z-10
            border-khaki-beige fixed top-[4.4rem] left-6 right-6
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
                    text-[20px] bg-charcoal-brown px-2 py-1 rounded-[.3rem]
                    my-3 ">start a project</a>
                </nav>
            </div>
        ) }

        {/* navigation on medium to larger screens */}
        <section className="h-auto bg-dusty-grey/10 md:flex items-center
        justify-between px-3 rounded-[.5rem] backdrop-blur-xl hidden
        m-0 border border-khaki-beige text-dusty-olive fixed left-6
        right-6 z-10 ">
            {/* logo div */}
            <div>
                <h1 className="font-black capitalize font-nunito
                tracking-widest ">
                    <span>frank</span>
                    <span>&nbsp;vincent</span>
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
                text-[20px] bg-charcoal-brown px-2 py-1 rounded-[.3rem]
                my-3 ">start a project</a>
            </div>
        </section>
    </div>

  )

}

export default Navigation

