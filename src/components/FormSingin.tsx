'use client'

import { FormGroup } from "./FormGroup"

export function FormSingin() {
  return (
    <form className='grid gap-8'>
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