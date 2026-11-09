import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

    function projectsAnimation ():gsap.core.Timeline {
        let projectSection = document.querySelector(".projects")
        let project = document.querySelector(".projects3")
        let title = document.querySelector(".project-title")
        let description = document.querySelector(".project-description")
        let link = document.querySelector(".project-link")
        let projectContainer = document.querySelector(".projects-container")
        let duration = 0.7
        gsap.defaults({duration:duration})
        const projectTimeline = gsap.timeline()
        .from(project, {opacity:0, xPercent:-250, ease:"back"})
        .from(title, {opacity:0, y:80})
        .from(description, {opacity:0, y:80})
        .from(link, {opacity:0, y:80, scale:0.3})
        .from(projectContainer, {opacity:0, y:80})

        // scroll triggered animation
        ScrollTrigger.create({
            animation: projectTimeline,
            trigger: projectSection,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "restart none none reverse"
        })
        return projectTimeline;
    }

    useGSAP ( ()=> { projectsAnimation() }, [] )

  return (

    <div>
        {/* projects section */}
        <section id='projects'
        className='min-h-screen h-auto p-6 text-dusty-grey projects '>
            {/* projects heading */}
            <div className='grid grid-cols-1 items-center justify-center gap-6
            md:grid-cols-12 md:items-start '>
                {/* right heading */}
                <div className='md:col-span-5'>
                <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
                lowercase tracking-widest text-left projects3
                 "> [03 / projects] </h2>
                <h2 className='font-glitch font-thin capitalize text-[24px]
                py-3 tracking-widest md:text-[44px] project-title
                 '>turning ideas into real outcomes</h2>
                </div>
                {/* left heading */}
                <div className='text-left md:text-right md:pt-[10rem]
                md:col-span-7 '>
                    <p className='tracking-wide text-[18px] leading-[2rem] py-3
                    md:text-[20px] md:leading-[2.5rem] project-description '>
                        We combine strategic thinking, refined design and
                        modern technology to create websites that look great
                        and deliver measurable value.
                    </p>
                    <a href="#together"
                    className="inline-block my-4 bg-olive-leaf px-2 py-1 rounded-[.3rem]
                    font-thin project-link ">start a project</a>
                </div>
            </div>
            {/* projects */}
            <div className='grid grid-cols-1 gap-8 items-center justify-center
            md:grid-cols-12 md:items-start py-12 projects-container '>
                {/* right div */}
                <div className='md:col-span-5'>
                    {/* real estates div */}
                    <div className='bg-[url("/hero2.webp")] bg-cover bg-center
                    h-[20rem] w-full rounded-[.2rem] relative md:h-[42rem]
                    cursor-pointer '>
                    <div className='absolute inset-0 bg-gradient-to-b rounded-[.2rem]
                    from-transparent to-olive-leaf md:h-[42rem] '></div>
                    {/* the content */}
                    <div className='relative bottom-0 left-0 right-0 top-[14rem]
                    p-3 flex items-center justify-between md:top-[35rem] '>
                            <p className='py-2 font-kempt font-black tracking-widest
                            capitalize text-[18px] leading-[2rem] md:text-[30px]
                            md:leading-[2.5rem] '>a premium brand with a new identity</p>
                            <div className='bg-charcoal-brown rounded-full ml-4 '>
                                <a href="https://gwamaka.netlify.app/"
                                target='_blank' rel='noopener noreferer'>
                                    <ArrowUpRight className='size-10 p-2'/> 
                                </a>
                            </div>
                    </div>
                    </div>
                </div>

                {/* left div */}
                <div className='grid grid-cols-1 gap-8 items-center justify-center
                md:col-span-7 '>
                    {/* upper div */}
                    <div>
                        {/* deisa homes div */}
                        <div className='bg-[url("/bedroom.webp")] bg-cover bg-center
                        h-[20rem] w-full rounded-[.2rem] relative cursor-pointer '>
                        <div className='absolute inset-0 bg-gradient-to-b rounded-[.2rem]
                        from-transparent to-olive-leaf '></div>
                        {/* the content */}
                        <div className='relative bottom-0 left-0 right-0 top-[14rem]
                        p-3 flex items-center justify-between '>
                            <p className='py-2 font-kempt font-black tracking-widest
                            capitalize text-[18px] leading-[2rem] md:text-[30px]
                             '>a new identity for an ambitious brand</p>
                            <div className='bg-charcoal-brown rounded-full ml-4 '>
                                <a href="https://decor-decoor.netlify.app/"
                                target='_blank' rel='noopener noreferrer'>
                                    <ArrowUpRight className='size-10 p-2'/> 
                                </a>
                            </div>
                    </div>
                        </div>
                    </div>
                    {/* lower div */}
                    <div className='gap-8 flex flex-col items-center justify-center
                    md:items-start md:flex-row '>
                        {/* fa advocates div */}
                        <div className='bg-[url("/justice.webp")] bg-cover bg-center
                        h-[20rem] w-full rounded-[.2rem] relative cursor-pointer '>
                        <div className='absolute inset-0 bg-gradient-to-b rounded-[.2rem]
                        from-transparent to-olive-leaf '></div>
                        {/* the content */}
                        <div className='relative bottom-0 left-0 right-0 top-[14rem]
                        p-3 flex items-center justify-between '>
                            <p className='py-2 font-kempt font-black tracking-widest
                            capitalize text-[18px] leading-[2rem]
                             '>a premium brand with a new identity</p>
                            <div className='bg-charcoal-brown rounded-full ml-4 '>
                                <a href="https://faadvocates.netlify.app/"
                                target='_blank' rel='noopener noreferer'>
                                    <ArrowUpRight className='size-10 p-2'/> 
                                </a>
                            </div>
                        </div>
                        </div>
                        {/* king james pharmcay div */}
                        <div className='bg-[url("/consultation.webp")] bg-cover bg-center
                        h-[20rem] w-full rounded-[.2rem] relative cursor-pointer '>
                        <div className='absolute inset-0 bg-gradient-to-b rounded-[.2rem]
                        from-transparent to-olive-leaf '></div>
                        {/* the content */}
                        <div className='relative bottom-0 left-0 right-0 top-[14rem]
                        p-3 flex items-center justify-between '>
                            <p className='py-2 font-kempt font-black tracking-widest
                            capitalize text-[18px] leading-[2rem]
                             '>a premium brand with a new identity</p>
                            <div className='bg-charcoal-brown rounded-full ml-4 '>
                                <a href="https://james-pharmacy.netlify.app/"
                                target='_blank' rel='noopener noreferer'>
                                    <ArrowUpRight className='size-10 p-2'/> 
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>

  )

}

export default Projects

