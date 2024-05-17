import Header from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clara - Personal Portfolio',
  description: 'Clara is a full-stack developer and designer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        
      <div className="bg-[#ecdefc] absolute bg-center top-[-1rem] -z-10 h-[31.25rem] w-[60rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

      <Header />
      {children}
      </body>
    </html>
  )
}
