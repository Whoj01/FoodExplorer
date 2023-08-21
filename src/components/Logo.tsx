import Image from "next/image";
import Polygon from "@/assets/svg/polygon.svg"

interface LogoProps {
   logoSize?: string,
   fontSize?: string
}

export function Logo({ logoSize = 'h-12 w-12', fontSize = "text-4xl" }: LogoProps) {
  return (
    <div className='flex items-center justify-center gap-5'>
        <Image src={Polygon} alt='Simbolo de um polygono' className={logoSize}/>
        <h1 className={`font-roboto font-bold text-zinc-100 ${fontSize}`}>
          FoodExplorer
        </h1>
    </div>
  )
}