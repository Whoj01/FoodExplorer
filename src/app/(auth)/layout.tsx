import Image from "next/image";
import { ReactNode } from "react";
import Polygon from '@/assets/svg/polygon.svg'

export default function LayoutAuth({children}: {children: ReactNode}) {
  return (
    <main className="min-h-screen grid grid-cols-2 items-center">
    {/*Left */}
      <div className='flex items-center justify-center gap-5'>
        <Image src={Polygon} alt='Simbolo de um polygono' className='h-12 w-12'/>
        <h1 className='font-roboto font-bold text-zinc-100 text-4xl'>
          FoodExplorer
        </h1>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex flex-col p-16 bg-black-700 gap-8 rounded-2xl'>
          {children}
        </div>
      </div>
    </main>
  )
}