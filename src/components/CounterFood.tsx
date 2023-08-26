import { Minus, Plus } from "lucide-react";

interface CounterFoodProps {
  amount: number,
  setAmount: (quantity: number) => void
}

export function CounterFood({amount, setAmount }: CounterFoodProps) {
  return (
    <div className='flex gap-3 justify-center items-center'>
      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer' onClick={() => setAmount(-1)}/>

      <p className='font-roboto text-xl text-zinc-100 font-bold'>
        {amount}
      </p>

      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer' onClick={() => setAmount(1)}/>
    </div>
  )
}
