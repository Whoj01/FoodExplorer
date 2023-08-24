interface LogoTextProps {
  fontSize: string,
  children?: React.ReactNode
}

export function LogoTextSepia({fontSize, children}: LogoTextProps) {
  return (
    <div>
       <h1 className={`font-roboto font-bold text-[#4D585E] ${fontSize}`}>
        FoodExplorer
      </h1>

      {children}
    </div>
  )
 
}