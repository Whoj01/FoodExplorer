import { FormGroup } from "@/components/FormGroup";
import { FormLogin } from "@/components/FormLogin";
import { TitleText } from "@/components/TitleText";
import Link  from 'next/link'


export default function Login() {
  return (
    <>
      <TitleText content="Faça login"/>

      <FormLogin/>

      <Link href="/singin" className='text-zinc-200 text-sm font-medium font-poppins text-center hover:text-zinc-300 transition-colors'>
        Criar uma conta
      </Link>
    </>
  )
}