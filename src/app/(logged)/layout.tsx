import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer";


export default function LayoutAuth({children}: {children: ReactNode}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>

      { children }

      <Footer/>
    </main>
  ) 
}