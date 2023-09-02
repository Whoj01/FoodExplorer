import Link  from 'next/link'
import { FormSingin } from '@/components/Forms/FormSingin'
import { TitleText } from '@/components/TitleText'

export default function Singin() {
  return (
      <>
          <TitleText content='Crie sua conta'/>

          <FormSingin/>

          <Link href="/login" className='text-zinc-200 text-sm font-medium font-poppins text-center hover:text-zinc-300 transition-colors'>
            Já tenho uma conta
          </Link>
      </>   
  )
}