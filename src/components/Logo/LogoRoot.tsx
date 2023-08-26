import Link from "next/link"

interface LogoRootProps {
  children: React.ReactNode
}

export function LogoRoot({ children }: LogoRootProps) {
  return (
    <Link href="/home" className='flex items-center justify-center gap-5' >
      {children}
    </Link>
  )
}