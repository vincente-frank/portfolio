import { MailIcon } from "lucide-react"



const Contacts = () => {

  return (

    <div>
        {/* contacts section */}
        <section id="contacts"
        className="min-h-screen h-auto p-6 text-dusty-grey ">
            {/* about me heading */}
            <h2 className="font-ubuntu font-black pt-12 pb-3 text-[26px]
            lowercase tracking-widest text-left "> [ 04 / contacts] </h2>
            {/* about description */}
            <p className="pt-3 pb-12 tracking-widest leading-[2rem] text-left
            text-[18px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* contacts div container */}
            <div className="grid grid-cols-1 items-start gap-6
            md:grid-cols-2 md:gap-x-16 ">
                {/* image div */}
                <div>
                    <img src="/port3.jpeg" alt="" 
                    className="aspect-square object-cover md:h-[30rem]
                    md:w-full rounded-[1rem] cursor-pointer hover:scale-103
                    transition-all duration-700 ease-in-out
                    object-top "/>
                </div>
                {/* contact form div */}
                <div>
                    <form action="#">
                        {/* name */}
                        <label htmlFor="name"
                        className='font-nunito uppercase flex flex-col gap-y-3 py-3 border-b
                        border-khaki-beige tracking-widest '
                        >your name
                            <input type="text" placeholder='Frank Vincent' required
                            className='outline-none border-none placeholder:text-olive-leaf
                            px-2 py-1 '
                            />
                        </label>
                        {/* email */}
                        <label htmlFor="email"
                        className='font-nunito uppercase flex flex-col gap-y-3 pt-8 border-b
                        border-khaki-beige tracking-wide'
                        >email address
                            <input type="email" placeholder='franknjolowelo@gmail.com' required
                            className='outline-none border-none placeholder:text-olive-leaf
                            px-2 py-1 '
                            />
                        </label>
                        {/* message */}
                        <div>
                            <p className='font-nunito uppercase pt-8 tracking-wide pb-2
                            '> project specifications</p>
                            <textarea name="message" id="message" cols={8} rows={5} required
                            placeholder='Tell us about the project type, it requirements and aesthetic expectations...'
                            className='border-b border-khaki-beige w-full px-2 py-1
                            placeholder:text-olive-leaf outline-none '
                            />
                        </div>
                        {/* send button */}
                        <button className='mt-4 bg-white text-black px-2 py-1 mb-6
                        rounded-[.5rem] font-black font-mono capitalize cursor-pointer '
                        >send message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Contacts

