interface LogoRootProps {
  children: React.ReactNode
}

export function LogoRoot({children}: LogoRootProps) {
  return (
    <div className='flex items-center justify-center gap-5'>
      {children}
    </div>
  )
}