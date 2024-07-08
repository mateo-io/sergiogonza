"use client"
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
        <div className="absolute z-30 flex flex-col items-center justify-center p-10 lg:p-24 w-full h-full">
          <div className="flex-grow">
            <h1 className="text-5xl lg:text-9xl text-gray-300 font-bold text-center italic mt-40">
              Sergio Gonza
            </h1>
            <p className="text-stone-300 italic text-center font-bold mt-10 lg:text-4xl text-4xl">
              Chef especialista en comida internacional
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="mb-10 font-inter text-stone-200 font-medium mt-10 text-5xl lg:text-4xl max-w-[480px]">
              <p className="mt-5 leading-20">Reserva tu evento aqui</p>
            </div>
            <div className="px-8 py-4 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 m-auto">
              <span className="text-2xl lg:text-4xl mr-5">📱</span>
              <span className="ml-2 lg:text-4xl text-xl font-bold tracking-wider">
                <a
                  className="font-inter"
                  target="_"
                  href="https://wa.me/573043943165"
                >
                  304 394 3165
                </a>
              </span>
            </div>

            <div className="bg-white rounded-full mt-10 p-1">
              <ChevronDown
                size={38}
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
        <div className="min-h-screen w-full bg-white"></div>
      </div>
    </main>
  )
}
