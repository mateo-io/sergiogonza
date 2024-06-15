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
          <img className="h-full object-cover" src="/cocinando.jpeg" />
        </div>
        <div className="z-10 absolute bg-gray-800 opacity-50 h-full w-full"></div>
        <div className="absolute z-30 flex flex-col items-center justify-center p-24 w-full h-full">
          <h1 className="text-3xl">Sergio Gonzalez - Chef en casa</h1>
        </div>
      </div>
    </main>
  )
}
