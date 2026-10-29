// import Navigation from './components/navigation'

import Navigation from "./navigation"



const Hero = () => {

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

        {/* hero section */}
        <section id="hero"
        className="p-6 min-h-screen h-auto " >
            {/* navigation component */}
            <Navigation/>
            {/* content container div */}
            <div className="flex items-start justify-start flex-col
            gap-y-8 pt-24 text-dusty-olive font-charon md:flex-row
            md:gap-x-12 ">
            {/* the left content div */}
            <div>
                {/* creative developer */}
                <p className="text-dusty-grey font-kempt text-[14px] py-3
                uppercase font-thin tracking-widest "> a creative developer</p>
                {/* hero title */}
                <h1 className="py-3 text-[18px] capitalize font-thin font-glitch
                tracking-widest leading-[2rem] md:text-[2.8rem] md:leading-[4rem]
                md:py-4 ">
                    <span className="inline-block">new possibilities for</span>
                    <span className="inline-block text-khaki-beige saturate-200
                     ">&nbsp;ambitious brands</span>
                </h1>
                {/* hero description */}
                <p className="py-3 text-[16px] leading-[2rem] md:text-[30px]
                md:leading-[3rem] md:py-4 " >
                    We create midern websites that strengthen your image,
                    attract clients and turn your business goals into real
                    growth.
                </p>
                {/* start a project */}
                <a href="#together"
                className="bg-khaki-beige px-2 py-1 rounded-[.2rem] text-charcoal-brown
                font-black inline-block my-6 text-[18px] md:text-[20px] "
                > start a project </a>
            </div>
            {/* the image content div */}
           <div className="relative w-full -ml-[5%]">

            <div
                className="aspect-[1.1/1] w-full"
                style={{
                clipPath: "url(#heroBlob)",
                }}
            >
                <img
                src="/port2.jpeg"
                alt="Creative developer working"
                className="h-full w-full object-cover"
                />
            </div>

           </div>
           
            </div>

        </section>

    </div>

  )

}

export default Hero
