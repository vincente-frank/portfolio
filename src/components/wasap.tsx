import { MessageCircle } from "lucide-react"



const Wasap = () => {

  const wasapURL = "https://wa.link/5vlyxo"

  return (

    <div>
        {/* floating wasap button section */}
        <section className="bg-khaki-beige rounded-full fixed z-10
        right-8 bottom-12 ">
            <a href={wasapURL} target="_blank"
            rel="noopener noreferer">
              <MessageCircle
            className="text-charcoal-brown size-12 p-2"
            />
            </a>
        </section>
    </div>

  )

}

export default Wasap

