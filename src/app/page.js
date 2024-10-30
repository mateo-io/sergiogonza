"use client"
import { headerHeight } from "@/constants"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { InstagramEmbed } from "react-social-media-embed"
import WhatsAppIcon from "@/icons/whatsapp"

export default function Home() {
  return (
    <main className="font-raleway">
      <div
        className="relative"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <div className="absolute z-0 w-full h-full">
          <img className="h-full object-cover w-full" src="/comida.avif" />
        </div>
        <div className="z-10 absolute bg-gray-900 opacity-50 h-full w-full"></div>
        <div className="absolute z-30 flex flex-col items-center justify-center px-10 w-full h-full">
          <div className="flex-grow font-cloudy">
            <h1 className="text-5xl lg:text-8xl  text-gray-200 font-black text-center italic mt-44">
              Chef
            </h1>
            <h1 className="text-5xl lg:text-8xl  text-gray-200 font-black text-center italic mt-5">
              Sergio Gonza
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mb-10">
            <div className="mb-5  text-stone-300 font-bold mt-5 text-4xl max-w-[580px] italic">
              <p className="mt-5">Cotiza tu evento aqui</p>
            </div>
            <div className="flex  items-center  justify-center px-12 py-3 bg-indigo-800 text-white rounded-lg cursor-pointer hover:bg-green-700 m-auto">
              <span style={{ fontSize: "32px" }} className="flex items-center">
                <WhatsAppIcon />
              </span>

              <span className="ml-2 text-2xl font-bold tracking-wider relative leading-7 top-0.5">
                <a
                  className="font-cloudy"
                  target="_"
                  href="https://wa.me/573043943165"
                >
                  304 394 3165
                </a>
              </span>
            </div>

            <div className="bg-gray-300 rounded-full mt-10 p-2">
              <ChevronDown
                size={28}
                className="hover:scale-110 cursor-pointer"
                onClick={() => {
                  // const scrollTo = document.getElementById("projects")?.scrollTop
                  typeof document === "object" &&
                    document
                      .getElementById("food")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="food">
        <div className="min-h-screen w-full bg-white">
          <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto p-6 md:space-x-6">
            {/* Text Column */}
            <div className="w-full md:w-1/2">
              <h1 className="text-6xl font-bold lg:mb-20 mb-10 mt-10 lg:mt-0">
                Acerca del chef
              </h1>
              <p className="text-xl mb-6">
                Sergio Gonza, oriundo de Manizales, es un chef apasionado por
                los viajes, la autenticidad culinaria, pero principalmente ocupa
                su tiempo en la búsqueda constante de ingredientes, sabores y
                aromas únicos. A lo largo de sus recorridos por Suramérica y
                Centroamérica, Sergio ha aprendido técnicas y recetas que
                aportan una personalidad única a su cocina, combinando tradición
                y creatividad.
              </p>

              <p className="text-xl mb-10">
                <strong>La Cocina como Experiencia</strong> es el metodo
                desarrollado personalizar cada evento, Sergio se enfoca en
                satisfacer las expectativas de sus clientes, creando menús
                hechos a la medida. Desde platos autóctonos hasta propuestas
                innovadoras, su habilidad para transformar ingredientes locales
                en experiencias culinarias excepcionales hace que cada comida
                sea especial.
              </p>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 relative md:min-h-[600px] min-h-[420px]">
              <Image
                src="/foto-chef.avif"
                alt="Product Image"
                fill={true}
                className="object-contain rounded-xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="px-5 lg:px-40 lg:py-20 py-5 m-auto bg-gray-200">
          <div className="max-w-[720px] m-auto">
            <h1 className="text-6xl font-bold lg:mb-20 mb-10 mt-10 lg:mt-0 text-center">
              Sabor y Arte
            </h1>
            <Carousel>
              <CarouselContent>
                {[
                  "plato-1.jpg",
                  "plato-2.webp",
                  "plato-3.webp",
                  "plato-4.webp",
                  "plato-5.jpg",
                ].map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`/carousel/${img}`}
                      alt={`Plato ${index + 1}`}
                      width={550}
                      height={630}
                      className="m-auto lg:w-[680px] overflow-hidden"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-10 py-10 lg:px-40 lg:py-20">
        <h1 className="text-6xl font-bold lg:mb-20 mb-10 mt-10 lg:mt-0 text-center">
          Eventos destacados
        </h1>
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-center">
          <InstagramEmbed
            url="https://www.instagram.com/reel/C5Ud7K-tDD0/"
            width={340}
          />

          <InstagramEmbed
            url="https://www.instagram.com/reel/CvfUZ8qrH9p/"
            width={340}
          />

          <InstagramEmbed
            url="https://www.instagram.com/reel/C6jEbxrL_Qk/"
            width={340}
          />
        </div>
      </div>

      <div className="min-h-[500px] bg-gray-200 p-5 lg:py-20">
        <div className="max-w-[720px] m-auto">
          <h1 className="text-6xl font-bold lg:mb-10 mb-5 mt-20 lg:mt-0 text-center">
            Nosotros nos encargamos de tu evento
          </h1>
          <p className="text-2xl">
            Catering y chef en casa con menús personalizados para eventos
            inolvidables, adaptados a tus gustos y necesidades.
          </p>
          <p className="text-3xl mt-8">
            Linea directa de contacto por{" "}
            <span className="font-bold">WhatsApp</span>
          </p>
          <div className="px-12 py-3 bg-green-800 text-white rounded-lg cursor-pointer hover:bg-green-700 m-auto max-w-[320px] mt-10">
            <span style={{ fontSize: "32px" }} className="lg:text-4xl mr-3">
              📱
            </span>
            <span className="ml-2 text-2xl font-bold tracking-wider relative -top-1">
              <a
                className="font-cloudy"
                target="_"
                href="https://wa.me/573043943165"
              >
                304 394 3165
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
