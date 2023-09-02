import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  placeholder: string,
  id: string,
  styles?: string,
}

export function TextInput ({ placeholder, id, styles, ...rest}: InputProps) {
  return (
    <input 
    {...rest}
    className={`bg-black-800 py-3 px-4 w-[348px] rounded-lg placeholder:text-zinc-500 outline-none focus: focus:ring-slate-400 focus:ring-2 transition-all text-zinc-400 ${styles}`}  
    id={id} 
    placeholder={placeholder}
  />
  )
}