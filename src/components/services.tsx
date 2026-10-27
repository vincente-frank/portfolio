import { ArrowUp, ArrowUpRight, CodeIcon, GlobeCode, HeartHandshakeIcon, ScanEyeIcon, SearchIcon } from 'lucide-react'
import React from 'react'

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
            <div className='flex flex-col md:flex-row '>

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

                {/* mobile application development */}
                <div className='border border-khaki-beige rounded-[.5rem] p-3 w-full
                flex items-center justify-center gap-x-6 md:flex-col
                md:items-start hover:scale-105 cursor-pointer transition-all
                duration-700 ease-in-out '>
                    {/* the start icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <CodeIcon className='size-8 p-1'/>
                    </div>

                    {/* flexed icons div in medium to larger screens */}
                    <div className='hidden md:flex items-center justify-between
                    gap-x-46 '>
                        {/* globe code icon */}
                        <div className='rounded-full border border-khaki-beige '>
                         <CodeIcon className='size-8 p-1'/>
                        </div>
                        {/* arrow upright button */}
                        <div className='rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>

                    </div>

                    {/* the text */}
                    <div>
                        <h2 className='font-nunito font-black tracking-wide
                        py-2 '>
                        <span className='text-dusty-olive '>01.</span>
                        <span>&nbsp;mobile app development</span>
                    </h2>
                    <p className='text-[16px] tracking-wide py-2 leading-[1.6rem] '>
                        Fast, responsive and conversion-focused websites for
                        modern businesses. Every screen has a clear purpose.
                    </p>
                    </div>
                    {/* the last icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                    </div>
                </div>

                {/* seo ranking */}
                <div className='border border-khaki-beige rounded-[.5rem] p-3 w-full
                flex items-center justify-center gap-x-6 md:flex-col
                md:items-start hover:scale-105 cursor-pointer transition-all
                duration-700 ease-in-out '>
                    {/* the start icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <SearchIcon className='size-8 p-1'/>
                    </div>

                    {/* flexed icons div in medium to larger screens */}
                    <div className='hidden md:flex items-center justify-between
                    gap-x-46 '>
                        {/* globe code icon */}
                        <div className='rounded-full border border-khaki-beige '>
                         <SearchIcon className='size-8 p-1'/>
                        </div>
                        {/* arrow upright button */}
                        <div className='rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>

                    </div>

                    {/* the text */}
                    <div>
                        <h2 className='font-nunito font-black tracking-wide
                        py-2 '>
                        <span className='text-dusty-olive '>03.</span>
                        <span>&nbsp;SEO Ranking</span>
                    </h2>
                    <p className='text-[16px] tracking-wide py-2 leading-[1.6rem] '>
                        Fast, responsive and conversion-focused websites for
                        modern businesses. Every screen has a clear purpose.
                    </p>
                    </div>
                    {/* the last icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                    </div>
                </div>

                {/* support and growth */}
                <div className='border border-khaki-beige rounded-[.5rem] p-3 w-full
                flex items-center justify-center gap-x-6 md:flex-col
                md:items-start hover:scale-105 cursor-pointer transition-all
                duration-700 ease-in-out '>
                    {/* the start icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <HeartHandshakeIcon className='size-8 p-1'/>
                    </div>

                    {/* flexed icons div in medium to larger screens */}
                    <div className='hidden md:flex items-center justify-between
                    gap-x-46 '>
                        {/* globe code icon */}
                        <div className='rounded-full border border-khaki-beige '>
                         <HeartHandshakeIcon className='size-8 p-1'/>
                        </div>
                        {/* arrow upright button */}
                        <div className='rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>

                    </div>

                    {/* the text */}
                    <div>
                        <h2 className='font-nunito font-black tracking-wide
                        py-2 '>
                        <span className='text-dusty-olive '>04.</span>
                        <span>&nbsp;support & growth</span>
                    </h2>
                    <p className='text-[16px] tracking-wide py-2 leading-[1.6rem] '>
                        Fast, responsive and conversion-focused websites for
                        modern businesses. Every screen has a clear purpose.
                    </p>
                    </div>
                    {/* the last icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                    </div>
                </div>

                {/* brand identity */}
                <div className='border border-khaki-beige rounded-[.5rem] p-3 w-full
                flex items-center justify-center gap-x-6 md:flex-col
                md:items-start hover:scale-105 cursor-pointer transition-all
                duration-700 ease-in-out '>
                    {/* the start icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <ScanEyeIcon className='size-8 p-1'/>
                    </div>

                    {/* flexed icons div in medium to larger screens */}
                    <div className='hidden md:flex items-center justify-between
                    gap-x-46 '>
                        {/* globe code icon */}
                        <div className='rounded-full border border-khaki-beige '>
                         <ScanEyeIcon className='size-8 p-1'/>
                        </div>
                        {/* arrow upright button */}
                        <div className='rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                        </div>

                    </div>

                    {/* the text */}
                    <div>
                        <h2 className='font-nunito font-black tracking-wide
                        py-2 '>
                        <span className='text-dusty-olive '>05.</span>
                        <span>&nbsp;brand identity</span>
                    </h2>
                    <p className='text-[16px] tracking-wide py-2 leading-[1.6rem] '>
                        Fast, responsive and conversion-focused websites for
                        modern businesses. Every screen has a clear purpose.
                    </p>
                    </div>
                    {/* the last icon */}
                    <div className='md:hidden rounded-full border border-khaki-beige '>
                        <a href="#"><ArrowUpRight className='size-8 p-1'/></a>
                    </div>
                </div>

            </div>
        </section>
    </div>

  )

}

export default Services

