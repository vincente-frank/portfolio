


const Together = () => {

  return (

    <div>
        {/* together section */}
        <section className="min-h-screen h-auto p-6 bg-[url('/mountains.jpg')]
        bg-cover bg-center bg-fixed relative text-dusty-grey m-4 rounded-[1rem] ">
            {/* the overlay */}
            <div className="absolute inset-0 bg-gradient-to-t rounded-[1rem]
            from-olive-leaf via-olive-leaf/40 to-olive-leaf/20 "></div>
            {/* the content */}
            <div className="relative flex flex-col items-center justify-center
            pt-[9rem] md:pt-[7rem] ">
                <h2 className="font-glitch uppercase tracking-[.3rem] text-center
                py-3 leading-[2.5rem] font-thin text-[24px] text-charcoal-brown
                md:text-[4rem] md:leading-[5rem] md:text-dusty-grey
                 ">your business deserves more</h2>
                <h1 className="font-thin py-3 text-[18px] tracking-[.2rem]
                text-center md:text-[35px] md:font-black ">Let's create together</h1>
                <p className="py-3 tracking-widest md:text-[26px] md:px-[4rem]
                text-center ">
                    Tell us about your project and let's see how
                    we can help your business grow.
                </p>
                <div className="py-3 flex gap-6 md:py-5 ">
                    <a href="#"
                    className="bg-charcoal-brown px-2 py-1 rounded-[.2rem] "
                    >get in touch</a>
                    <a href="#"
                    className="outline outline-offset-0 outline-khaki-beige
                    px-2 py-1 rounded-[.2rem] "
                    >explore services</a>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Together

