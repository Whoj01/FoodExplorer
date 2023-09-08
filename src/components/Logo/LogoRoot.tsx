import Link from "next/link"

interface LogoRootProps {
  children: React.ReactNode,
  logged: boolean
}

export function LogoRoot({ children, logged }: LogoRootProps) {
  const hrefToIfIsLogged = logged ? '/home' : '/login'

  return (
    <Link href={hrefToIfIsLogged} className='flex items-center justify-center gap-5' >
      {children}
    </Link>
  )
}