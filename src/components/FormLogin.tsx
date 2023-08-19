'use client'

import { FormGroup } from "./FormGroup";

export function FormLogin() {
  return (
    <form className="grid gap-8">
        <FormGroup id="email" placeholder="Exemplo: exemplo@exemplo.com.br" labelTitle="Email"/>

        <FormGroup id="password" placeholder="No mínimo 6 caracteres" labelTitle="Senha"/>

        <button
          type="submit"
          className='bg-red-600 rounded-md text-zinc-300 font-poppins font-medium text-sm py-3 px-8 hover:bg-red-500 transition-all'
         >
          Entrar
        </button>
      </form>
  )
}