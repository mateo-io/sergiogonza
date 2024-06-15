import { headerHeight } from "@/constants"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div
        className="relative"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <div className="absolute z-0 w-full h-full">
          <img className="h-full object-fit w-full" src="/cocinando.jpeg" />
        </div>
        <div className="z-10 absolute bg-gray-800 opacity-50 h-full w-full"></div>
        <div className="absolute z-30 flex flex-col items-center justify-center p-24 w-full h-full">
          <h1 className="font-bold text-center italic mt-40 flex-grow">
            <p className="text-8xl text-gray-300">Sergio Gonzalez</p>
            <p className="text-gray-300 mt-10 text-4xl">
              Chef en casa, catering, eventos.
            </p>
          </h1>
          <div className="flex justify-center items-center">
            <div className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer">
              <span>📱</span>
              <span className="ml-2">
                <a target="_" href="https://wa.me/573043943165">
                  3043943165
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
