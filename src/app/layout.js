import { Inter } from "next/font/google"
import "./globals.css"
import { headerHeight } from "@/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:
    "Sergio Gonzales | Chef profesional - Eventos - Catering - Chef en casa",
  description:
    "Chef profesional con experiencia en eventos, menu variado, asados, vegetariano, catering, chef en casa. Chef en casa basado en Manizales y disponible en todo el eje cafetero.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ height: `${headerHeight}px` }}>header</div>
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
