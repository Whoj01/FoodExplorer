export function ButtonText({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-sm font-poppins font-medium text-zinc-100'>
      { children } 
    </p>
  )
}