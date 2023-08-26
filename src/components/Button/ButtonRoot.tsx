import { ReactNode, ComponentProps } from "react"

type ButtonRootProps = ComponentProps<'button'> & { 
  children: ReactNode
} 

export function ButtonRoot({ children, ...props }: ButtonRootProps) {
  return (
    <button { ...props } className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer'>
      { children }
    </button>
  )
}