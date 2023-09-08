'use client'

import { FormEvent } from "react"
import { FormGroup } from "./FormGroup"
import { useRouter } from 'next/navigation'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(3, 'Ensira um nome válido'),
  email: z.string().email('Ensira um email válido'),
  password: z.string().min(6, 'A senha precisa no mínimo 6 caracteres')
})

type FormProps = z.infer<typeof schema>

export function FormSingin() {
  const router = useRouter()  
  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    resolver: zodResolver(schema)
  })

  function handleCrateAccount(data: FormProps) {
    router.push('/home')
  }

  return (
    <form className='grid gap-8' onSubmit={handleSubmit(handleCrateAccount)}>
        <FormGroup
          {...register('name')}
          labelTitle='Seu nome'
          id='name'
          placeholder='Exemplo: Maria da silva'
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />

        <FormGroup
          {...register('email')}
          labelTitle='Email' 
          id='senha' 
          placeholder='Exemplo: exemplo@exemplo.com.br'
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />

        <FormGroup
          {...register('password')}
          labelTitle='Senha' 
          id='senha' 
          placeholder='No mínimo 6 caracteres'
          error={!!errors.password?.message}
          helperText={errors.password?.message}
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