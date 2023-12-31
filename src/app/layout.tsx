import './global.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Poppins } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500'],
}) 

export const metadata: Metadata = {
  title: 'FoodExplorer',
  description: 'E-commerce sobre comida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${roboto.variable} ${poppins.variable} bg-black-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
