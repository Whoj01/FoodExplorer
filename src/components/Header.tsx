'use client'

import { LogOut } from "lucide-react";
import { TextInput } from "./TextInput";
import { Receipt } from 'lucide-react'
import { Logo } from "./Logo";
import { Button } from "./Button";
import { useRouter } from "next/navigation";


export function Header() {
  const router = useRouter()

  return (
    <header className='sticky w-screen flex justify-center items-center bg-black-600 px-28 py-6 gap-8'>
        <Logo.Root>
          <Logo.Icon logoSize="h-7 w-7"/>
          <Logo.Text fontSize="text-2xl"/>
        </Logo.Root>  

        <TextInput id='search' placeholder='Busque por pratos ou ingredientes' styles='flex-grow'/>

        <Button.Root>
          <Button.Icon Icon={Receipt} IconSize={32}/>

          <Button.Text content="Pedidos (0)"/>
        </Button.Root>

        <LogOut size={32} className="text-zinc-100 hover:text-zinc-300 transition-colors cursor-pointer" onClick={() => router.push("/login")}/>
      </header>
  )
}