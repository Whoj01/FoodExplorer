import { ComponentProps, forwardRef } from "react";

export interface InputProps extends ComponentProps<"input"> {
  placeholder: string,
  id: string,
  styles?: string,
  error?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(({placeholder, id, styles, error, ...rest }, ref) => {
  return (
    <input 
    data-error={error}
    {...rest}
    className={`data-[error=true]:border-red-500 data-[error=true]:border border  border-slate-800  focus:border-slate-300  bg-black-800 py-3 px-4 w-[348px] rounded-lg placeholder:text-zinc-500 outline-none transition-all text-zinc-400 ${styles}`}  
    id={id} 
    placeholder={placeholder}
    ref={ref}
  />
  )
})
