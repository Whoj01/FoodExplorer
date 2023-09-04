interface SectionTitleProps {
  children: React.ReactNode
}


export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h1 className="font-poppins text-3xl font-medium text-zinc-200">
      {children}
    </h1>
  )
}