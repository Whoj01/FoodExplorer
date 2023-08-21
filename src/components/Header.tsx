import { LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { TextInput } from "./TextInput";
import Image from "next/image";
import Receipt from '@/assets/svg/receipt.svg'

export function Header() {
  return (
    <header className='sticky w-screen flex justify-center items-center bg-black-600 px-28 py-6 gap-8 mb-40'>
        <Logo logoSize='h-7 w-7' fontSize='text-2xl'/>  

        <TextInput id='search' placeholder='Busque por pratos ou ingredientes' styles='flex-grow'/>

        <div className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer'>
          <Image src={Receipt} alt='Nota fiscal'/>

          <p className='text-sm font-poppins font-medium text-zinc-100'>
            Pedidos (0)
          </p>
        </div>

        <LogOut size={32} color='#fff'/>
      </header>
  )
}