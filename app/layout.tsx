import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Golem8 - Transformación Digital Completa",
  description: "Branding profesional + Desarrollo web/móvil + Automatización inteligente. Todo en un solo lugar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
