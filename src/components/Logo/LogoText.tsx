interface LogoTextProps {
  fontSize?: string,
  children?: React.ReactNode
}

export function LogoText({fontSize = 'text-4xl', children}: LogoTextProps) {
  return (
    <div>
       <h1 className={`font-roboto font-bold text-zinc-100 ${fontSize}`}>
        FoodExplorer
      </h1>

      {children}
    </div>
  )
 
}