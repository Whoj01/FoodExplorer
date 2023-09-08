'use client'

import { LogOut } from "lucide-react";
import { TextInput } from "../Forms/TextInput";
import { Receipt } from 'lucide-react'
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import Link from 'next/link'

export function Header() {
  const { state: { itemsCart } } = useCartStore()
  let amountOfItemsCart: number = itemsCart.reduce((acc, current) => acc += current.amount, 0);

  const router = useRouter()

  return (
    <header className='sticky w-screen flex justify-center items-center bg-black-600 px-28 py-6 gap-8'>
        <Logo.Root logged={true}>
          <Logo.Icon logoSize="h-7 w-7"/>
          <Logo.Text fontSize="text-2xl"/>
        </Logo.Root>  

        <TextInput id='search' placeholder='Busque por pratos ou ingredientes' styles='flex-grow'/>

        <Link href="/favoritos" className="font-roboto text-base font-normal text-zinc-300 hover:text-zinc-100 transition-all">
          Meus favoritos
        </Link>

        <Link href="/pedidos">
          <Button.Root>
            <Button.Icon Icon={Receipt} IconSize={32}/>

            <Button.Text> 
              Pedidos ({amountOfItemsCart})
            </Button.Text>
          </Button.Root>
        </Link>

        <LogOut size={32} className="text-zinc-100 hover:text-zinc-300 transition-colors cursor-pointer" onClick={() => router.push("/login")}/>
      </header>
  )
}