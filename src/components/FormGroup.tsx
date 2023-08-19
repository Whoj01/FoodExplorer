import { InputProps, TextInput } from "./TextInput";

interface FormGroup extends InputProps {
  labelTitle: string
}

export function FormGroup({ labelTitle, id, ...rest }: FormGroup) {
  return (
    <div className="grid gap-2">
        <label className='font-roboto font-normal text-xs text-zinc-500' htmlFor={id}>
          {labelTitle}
        </label>

        <TextInput {...rest} id={id}/>
    </div>
  )
}