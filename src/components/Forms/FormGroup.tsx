import { forwardRef } from "react";
import { InputProps, TextInput } from "./TextInput";
import { string } from "zod";

interface FormGroup extends InputProps {
  labelTitle: string,
  styles?: string,
  error?: boolean
  helperText?: string
}

export const FormGroup = forwardRef<HTMLInputElement,  FormGroup>(({helperText, error ,labelTitle, id, styles,...rest }, ref) => {
  return (
    <div className="grid gap-2">
        <label className='font-roboto font-normal text-xs text-zinc-500' htmlFor={id}>
          {labelTitle}
        </label>

        <TextInput {...rest} id={id} styles={styles} ref={ref} error={error}/>

        <small className="font-light font-roboto text-red-600 text-xm">
          {helperText}
        </small>
    </div>
  )
})

