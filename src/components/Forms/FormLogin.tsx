'use client'

import { z } from 'zod'
import react, { FormEvent } from "react";
import { FormGroup } from "./FormGroup";
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().min(5, 'Esse email não tem caractes suficiente').email('Ensira um email válido'),
  password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres')
})

type FormProps = z.infer<typeof schema>

export function FormLogin() {
  const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
    resolver: zodResolver(schema)
  })
  const router = useRouter()

  async function handleLogin(data: FormProps, e: any) {
    e.preventDefault()
    
    router.push("/home")
  } 

  return (
    <form className="grid gap-8" onSubmit={handleSubmit(handleLogin)}>
        <FormGroup 
          {...register('email')}
          id="email" 
          placeholder="Exemplo: exemplo@exemplo.com.br" 
          labelTitle="Email" 
          styles="border border-slate-200"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          key='email'
        />

        <FormGroup 
          {...register('password')}
          id="password" 
          placeholder="No mínimo 6 caracteres" 
          labelTitle="Senha" 
          styles="border border-slate-200"
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          key='password'
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