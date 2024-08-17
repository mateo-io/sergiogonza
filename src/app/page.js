import { headerHeight } from "@/constants"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="font-amelaryas">
      <div
        className="relative"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <div className="absolute z-0 w-full h-full">
          <img className="h-full object-cover w-full" src="/comida.avif" />
        </div>
        <div className="z-10 absolute bg-gray-900 opacity-50 h-full w-full"></div>
        <div className="absolute z-30 flex flex-col items-center justify-center px-10 w-full h-full">
          <div className="flex-grow">
            <h1 className="text-7xl  text-gray-300 font-bold text-center italic mt-44 font-cloudy">
              Chef Sergio Gonza
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mb-10">
            <div className="mb-5  text-stone-300 font-bold mt-5 text-4xl max-w-[580px] italic">
              <p className="mt-5">Cotiza tu evento aqui</p>
            </div>
            <div className="px-12 py-3 bg-green-800 text-white rounded-lg cursor-pointer hover:bg-green-700 m-auto">
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
          <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 lg:space-x-6">
            {/* Text Column */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-6xl font-bold lg:mb-20 mb-10 mt-10 lg:mt-0">
                Conoce al chef
              </h1>
              <p className="text-xl mb-6">
                Sergio Gonza es un chef profesional, fanatico de los viajes y
                con una pasión gigante por descubrir ingredientes, sabores, y
                aromas en busca de los mejores platos de comida.
              </p>

              <p className="text-xl mb-10">
                Autóctono de Manizales, Caldas, Sergio se ha enfocado en suplir
                la necesidad de la gente de tener su propio menu personalizado
                para su evento, desde todos sus viajes Sergio ha añadido muchos
                platos a su repertorio, desde ceviche Colombiano hasta parilla
                Argentina, hay un menu para todos los gustos.
              </p>
              <div className="px-12 py-3 bg-green-800 text-white rounded-lg cursor-pointer hover:bg-green-700 m-auto max-w-[300px] mt-20">
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

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[600px]">
              <Image
                src="/foto-chef.avif"
                alt="Product Image"
                fill={true}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
