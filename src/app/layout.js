import { Inter } from "next/font/google"
import "./globals.css"
import { headerHeight } from "@/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sergio Gonza | Chef profesional - Eventos - Catering - Chef en casa",
  description:
    "Chef profesional con experiencia en eventos, menu variado, asados, vegetariano, catering, chef en casa. Chef en casa basado en Manizales y disponible en todo el eje cafetero.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="title" content="Sergio Gonza - Chef y Catering"></meta>
      <meta
        name="description"
        content="Chef Sergio Gonza - Catering y chef en casa con menús personalizados para eventos inolvidables, catering de eventos en Manizales, Caldas, y sus alrededores como Pereira, Chinchina y Santagueda."
      ></meta>
      <body className={inter.className}>
        <div style={{ height: `${headerHeight}px` }}></div>
        <div
          className="relative"
          style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
