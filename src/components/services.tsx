import { ArrowUpRight, CodeIcon, GlobeCode, HeartHandshakeIcon, ScanEyeIcon, SearchIcon } from 'lucide-react'


const Services = () => {

  return (

    <div>
        {/* services section */}
        <section className='min-h-screen h-auto p-6 text-dusty-grey '>
            {/* heading and description */}
            <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
            lowercase tracking-widest text-left "> [02 / services] </h2>
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] ">
                End-to-end support, from the first conccept to launch and
                continued growth.
            </p>
            {/* services container div */}
            <div className='grid grid-cols-1 items-center justify-center
            gap-y-8 md:grid-cols-3 md:gap-x-6 py-12 '>

                {/* custom website development */}
                <div className='p-3 border border-khaki-beige rounded-[.2rem]
                hover:scale-103 duration-700 ease-in-out duration-700
                cursor-pointer '>
                    {/* icons */}
                    <div className='flex items-center justify-between
                    py-3 '>
                        {/* the globe code */}
                        <div className='rounded-full border border-khaki-beige
                        '><GlobeCode className='size-8 p-1'/></div>
                        {/* arrow upright icon */}
                        <div className='rounded-full border border-khaki-beige
                        '>
                            <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>
                    </div>
                    {/* the text */}
                    <div className='py-3'>
                        <h2 className='font-nunito tracking-wide font-black py-2 '>
                            <span className='text-dusty-olive saturate-200 '>01.</span>
                            <span>&nbsp;custom website development</span>
                        </h2>
                        <p className='py-2 tracking-wide leading-[1.8rem] '>
                            Fast, responsive and conversion-focused websites for
                            modern businesses. Every screen has a clear purpose.
                        </p>
                    </div>
                </div>

                {/* mobile applicationdevelopment */}
                <div className='p-3 border border-khaki-beige rounded-[.2rem]
                hover:scale-103 duration-700 ease-in-out duration-700
                cursor-pointer md:col-span-2 md:h-[15rem] '>
                    {/* icons */}
                    <div className='flex items-center justify-between
                    py-3 '>
                        {/* the globe code */}
                        <div className='rounded-full border border-khaki-beige
                        '><CodeIcon className='size-8 p-1'/></div>
                        {/* arrow upright icon */}
                        <div className='rounded-full border border-khaki-beige
                        '>
                            <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>
                    </div>
                    {/* the text */}
                    <div className='py-3'>
                        <h2 className='font-nunito tracking-wide font-black py-2 '>
                            <span className='text-dusty-olive saturate-200 '>02.</span>
                            <span>&nbsp;mobile app development</span>
                        </h2>
                        <p className='py-2 tracking-wide leading-[1.8rem] '>
                            Modern and functional design tailored to your brand.
                            We create experiences that feel intiutive and support
                            business goals.
                        </p>
                    </div>
                </div>

                {/* SEO Ranking */}
                <div className='p-3 border border-khaki-beige rounded-[.2rem]
                hover:scale-103 duration-700 ease-in-out duration-700
                cursor-pointer '>
                    {/* icons */}
                    <div className='flex items-center justify-between
                    py-3 '>
                        {/* the globe code */}
                        <div className='rounded-full border border-khaki-beige
                        '><SearchIcon className='size-8 p-1'/></div>
                        {/* arrow upright icon */}
                        <div className='rounded-full border border-khaki-beige
                        '>
                            <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>
                    </div>
                    {/* the text */}
                    <div className='py-3'>
                        <h2 className='font-nunito tracking-wide font-black py-2 '>
                            <span className='text-dusty-olive saturate-200 '>03.</span>
                            <span>&nbsp;SEO Ranking</span>
                        </h2>
                        <p className='py-2 tracking-wide leading-[1.8rem] '>
                            Modern and functional design tailored to your brand.
                            We create experiences that feel intiutive and support
                            business goals.
                        </p>
                    </div>
                </div>

                {/* support and growth */}
                <div className='p-3 border border-khaki-beige rounded-[.2rem]
                hover:scale-103 duration-700 ease-in-out duration-700
                cursor-pointer '>
                    {/* icons */}
                    <div className='flex items-center justify-between
                    py-3 '>
                        {/* the globe code */}
                        <div className='rounded-full border border-khaki-beige
                        '><HeartHandshakeIcon className='size-8 p-1'/></div>
                        {/* arrow upright icon */}
                        <div className='rounded-full border border-khaki-beige
                        '>
                            <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>
                    </div>
                    {/* the text */}
                    <div className='py-3'>
                        <h2 className='font-nunito tracking-wide font-black py-2 '>
                            <span className='text-dusty-olive saturate-200 '>04.</span>
                            <span>&nbsp;support and growth.</span>
                        </h2>
                        <p className='py-2 tracking-wide leading-[1.8rem] '>
                            Ongoing support after launch. We help keep your
                            website, and mobile application current, reliable
                            and ready for the next stage.
                        </p>
                    </div>
                </div>

                {/* brand identity */}
                <div className='p-3 border border-khaki-beige rounded-[.2rem]
                hover:scale-103 duration-700 ease-in-out duration-700
                cursor-pointer '>
                    {/* icons */}
                    <div className='flex items-center justify-between
                    py-3 '>
                        {/* the globe code */}
                        <div className='rounded-full border border-khaki-beige
                        '><ScanEyeIcon className='size-8 p-1'/></div>
                        {/* arrow upright icon */}
                        <div className='rounded-full border border-khaki-beige
                        '>
                            <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>
                    </div>
                    {/* the text */}
                    <div className='py-3'>
                        <h2 className='font-nunito tracking-wide font-black py-2 '>
                            <span className='text-dusty-olive saturate-200 '>05.</span>
                            <span>&nbsp;brand identity</span>
                        </h2>
                        <p className='py-2 tracking-wide leading-[1.8rem] '>
                            A consistent visual identity that helps your brand stand
                            out and build trust through strategy, type and detail.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </div>

  )

}

export default Services

