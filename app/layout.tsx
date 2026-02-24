import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Adgro Skin Velachery ",
  description:
    "Expert Hair Treatments in Velachery",
  generator: 'Nextjs15',
  icons: {
    icon: [
      {
        url: "/iconed.webp",
        sizes: "any",
      },
      {
        url: "iconed.webp",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "iconed.webp",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "iconed.webp",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "iconed.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "iconed.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}