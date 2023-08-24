import { Copyright } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-screen flex justify-between items-center bg-black-600 px-28 py-6 gap-8">
      <Logo.Root> 
        <Logo.IconSepia logoSize="h-7 w-7"/>
        <Logo.TextSepia fontSize="text-2xl"/>
      </Logo.Root>

      <p className='text-zinc-400 text-sm font-roboto font-normal truncate flex items-center gap-1 justify-center'>
        <Copyright size={14} className="text-zinc-400"/> 2023 - Todos os direitos reservados
      </p>
  </footer>
  )
}