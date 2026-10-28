import { MailIcon, PhoneCallIcon } from "lucide-react"



const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section className="p-6 h-auto text-dusty-grey ">
            {/* upper div */}
            <div className="grid grid-cols-1 md:grid-cols-3 pt-12 ">
                {/* logo div */}
                <div>
                    <h1 className="font-black capitalize font-nunito
                    tracking-widest text-dusty-olive text-[24px] ">
                    <span>frank</span>
                    <span>&nbsp;vincent</span>
                </h1>
                <p className="py-2 tracking-wide
                ">Experienced website developer</p>
                {/* email */}
                <div className="flex items-center py-2 gap-x-2 ">
                    <MailIcon/>
                    <p> vincentfrank5432@gmail.com </p>
                </div>
                {/* phone */}
                <div className="flex items-center py-2 gap-x-2 ">
                    <PhoneCallIcon/>
                    <p> +255 766 355 608 </p>
                </div>
                </div>
                {/* sections div */}
                <div className="py-4 md:pt-[3rem] ">
                    <h2 className="font-ubuntu font-thin text-[18px] py-3
                    capitalize tracking-widest ">sections</h2>
                    <nav className="grid grid-cols-1 items-start justify-start
                    gap-y-1 text-khaki-beige lowercase tracking-widest ">
                        <a href="#">home</a>
                        <a href="#">about me</a>
                        <a href="#">my works</a>
                        <a href="#">FAQ</a>
                        <a href="#">contacts</a>
                    </nav>
                </div>
                {/* chanels div */}
                <div className="py-4 md:pt-[3rem] ">
                    <h2 className="font-ubuntu font-thin text-[18px] py-3
                    capitalize tracking-widest ">help</h2>
                    <nav className="grid grid-cols-1 items-start justify-start
                    gap-y-1 text-khaki-beige lowercase tracking-widest ">
                        <a href="#">whatsapp</a>
                        <a href="#">instagram</a>
                        <a href="#">you tube</a>
                        <a href="#">tiktok</a>
                        <a href="#">github</a>
                    </nav>
                </div>
            </div>
            {/* lower div */}
            <div>
                <p className="text-center py-4 capitalize md:pt-8
                tracking-[.2rem] ">&nbsp;2026 all rights reserved</p>
            </div>
        </section>
    </div>

  )

}

export default Footer

