'use client'

import { FormEvent } from "react";
import { FormGroup } from "./FormGroup";
import { useRouter } from 'next/navigation'

export function FormLogin() {
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <form className="grid gap-8" onSubmit={handleSubmit}>
        <FormGroup 
          id="email" 
          placeholder="Exemplo: exemplo@exemplo.com.br" 
          labelTitle="Email" 
          styles="border border-slate-200"
        />

        <FormGroup 
          id="password" 
          placeholder="No mínimo 6 caracteres" 
          labelTitle="Senha" 
          styles="border border-slate-200"
        />

        <button
          type="submit"
          className='bg-red-600 rounded-md text-zinc-300 font-poppins font-medium text-sm py-3 px-8 hover:bg-red-500 transition-all'
         >
          Entrar
        </button>
      </form>
  )
}