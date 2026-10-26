import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"



const Navigation = () => {

    const [menu, setMenu] = useState<boolean>(false)

  return (

    <div>
        {/* navigation on smaller screens */}
        <section className="h-auto bg-dusty-grey/10 flex items-center
        justify-between p-2 rounded-[.5rem] backdrop-blur-3xl border
        md:hidden border-khaki-beige m-0 ">
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
            <div className="bg-charcoal-brown h-auto w-full border-b
            border-khaki-beige ">
                <nav className="flex flex-col items-start justify-start
                p-6 text-dusty-grey capitalize ">
                    <a href="#">home</a>
                    <a href="#">experiences</a>
                    <a href="#">works</a>
                    <a href="#">testimonials</a>
                    <a href="#">say hello</a>
                </nav>
            </div>
        ) }

        {/* navigation on medium to larger screens */}
        <section className="h-auto bg-dusty-grey/10 md:flex items-center
        justify-between px-3 rounded-[.5rem] backdrop-blur-xl hidden
        m-0 border border-khaki-beige text-dusty-olive ">
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
                    <a href="#">home</a>
                    <a href="#">experiences</a>
                    <a href="#">works</a>
                    <a href="#">testimonials</a>
                    <a href="#">say hello</a>
                </nav>
            </div>
            {/* contact me div */}
            <div>
                <a href="#">say hello</a>
            </div>
        </section>
    </div>

  )

}

export default Navigation

