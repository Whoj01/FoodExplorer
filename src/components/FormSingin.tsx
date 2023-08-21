'use client'

import { FormEvent } from "react"
import { FormGroup } from "./FormGroup"
import { useRouter } from 'next/navigation'

export function FormSingin() {
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push('/home')

  }

  return (
    <form className='grid gap-8' onSubmit={handleSubmit}>
        <FormGroup
          labelTitle='Seu nome'
          id='name'
          placeholder='Exemplo: Maria da silva'
        />

        <FormGroup
          labelTitle='Email' 
          id='senha' 
          placeholder='Exemplo: exemplo@exemplo.com.br'
         />

        <FormGroup
          labelTitle='Senha' 
          id='senha' 
          placeholder='No mínimo 6 caracteres'
         />

        <button
          type="submit"
          className='bg-red-600 rounded-md text-zinc-300 font-poppins font-medium text-sm py-3 px-8 hover:bg-red-500 transition-all'
         >
          Criar conta
         </button>
    </form>
  )
}