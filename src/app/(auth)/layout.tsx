import { ReactNode } from "react";
import { Logo } from "@/components/Logo";

export default function LayoutAuth({children}: {children: ReactNode}) {
  return (
    <main className="min-h-screen grid grid-cols-2 items-center">
    {/*Left */}
      <Logo.Root> 
        <Logo.Icon/>
        <Logo.Text/>
      </Logo.Root>

      <div className='flex items-center justify-center'>
        <div className='flex flex-col p-16 bg-black-700 gap-8 rounded-2xl'>
          {children}
        </div>
      </div>
    </main>
  )
}