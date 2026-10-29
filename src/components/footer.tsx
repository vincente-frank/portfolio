import { MailIcon, PhoneCallIcon } from "lucide-react"



const Footer = () => {

    const wasapURL = "https://wa.link/5vlyxo"
    const tiktokURL = "https://www.tiktok.com/@vincente_frank"
    const instagramURL = "https://www.instagram.com/vincente_frank/"
    const githubURL = "https://github.com/vincente-frank/"

  return (

    <div>
        {/* footer section */}
        <section id="footer"
        className="p-6 h-auto text-dusty-grey font-ubuntu ">
            {/* upper div */}
            <div className="grid grid-cols-1 md:grid-cols-3 pt-12
            md:gap-x-56 ">
                {/* logo div */}
                <div>
                    <h1 className="font-black capitalize font-nunito
                    tracking-widest text-dusty-olive text-[24px]
                    md:text-[50px] ">
                    <span>frank</span>
                    <span>&nbsp;vincent</span>
                </h1>
                <p className="py-2 tracking-wide md:text-[26px]
                ">Experienced website developer</p>
                {/* email */}
                <div className="flex items-center py-2 gap-x-2 ">
                    <MailIcon/>
                    <a href="mailto:vincentfrank5432@gmail.com"
                    className="md:text-[18px] animate-pulse ">
                        vincentfrank5432@gmail.com
                    </a>
                </div>
                {/* phone */}
                <div className="flex items-center py-2 gap-x-2 ">
                    <PhoneCallIcon/>
                    <a href="tel:+255766355608"
                    className="md:text-[18px] animate-pulse ">
                        +255 766 355 608
                    </a>
                </div>

                </div>
                {/* sections div */}
                <div className="py-4 md:pt-[5rem] md:pl-[2rem] ">
                    <h2 className="font-ubuntu font-thin text-[18px] py-3
                    capitalize tracking-widest md:text-[24px]
                     ">sections</h2>
                    <nav className="grid grid-cols-1 items-start justify-start
                    gap-y-1 text-khaki-beige lowercase tracking-widest ">
                        <a href="#hero"
                        className="capitalize md:text-[20px] py-1 ">home</a>
                        <a href="#about"
                        className="capitalize md:text-[20px] py-1 ">about me</a>
                        <a href="#projects"
                        className="capitalize md:text-[20px] py-1 ">my works</a>
                        <a href="#faq"
                        className="uppercase md:text-[20px] py-1 ">FAQ</a>
                    </nav>
                </div>
                {/* chanels div */}
                <div className="py-4 md:pt-[5rem] md:pl-[2rem] ">
                    <h2 className="font-ubuntu font-thin text-[18px] py-3
                    capitalize tracking-widest md:text-[24px]
                     ">help</h2>
                    <nav className="grid grid-cols-1 items-start justify-start
                    gap-y-1 text-khaki-beige lowercase tracking-widest ">
                        <a href={wasapURL} target="_blank" rel="noopener noreferer"
                        className="capitalize md:text-[20px] py-1 ">whatsapp</a>
                        <a href={instagramURL} target="_blank"
                        rel="noopener noreferer"
                        className="capitalize md:text-[20px] py-1 ">instagram</a>
                        <a href={tiktokURL} target="_blank" rel="noopener noreferer"
                        className="capitalize md:text-[20px] py-1 ">tiktok</a>
                        <a href={githubURL} target="_blank" rel="noopener noreferer"
                        className="capitalize md:text-[20px] py-1 ">github</a>
                    </nav>
                </div>
            </div>
            {/* lower div */}
            <div>
                <p className="text-center py-4 capitalize md:pt-8
                tracking-[.2rem] md:text-[2.5rem] md:text-olive-leaf
                 ">&nbsp;2026 all rights reserved</p>
            </div>
        </section>
    </div>

  )

}

export default Footer

