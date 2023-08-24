import Image from "next/image";
import Polygon from "@/assets/svg/polygon.svg"

interface LogoIconProps {
  logoSize: string
}

export function LogoIconSepia({logoSize = 'h-12 w-12'}: LogoIconProps) {
  return (
    <Image src={Polygon} alt='Simbolo de um polygono' className={`${logoSize} grayscale`}/>
  )
}