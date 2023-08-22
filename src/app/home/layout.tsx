import { Header } from "@/components/Header";
import { ReactNode } from "react";


export default function LayoutAuth({children}: {children: ReactNode}) {
  return (
    <main className="min-h-screen">
      <Header/>

      { children }
    </main>
  )
}