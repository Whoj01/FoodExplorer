'use client'

import { Heart } from "lucide-react"
import { useState } from "react"
import Spaguetti from '@/assets/Images/spaguetti-gambe.png'
import Image from 'next/image'
import { Food } from "@/utils/fakeFoodData"
import Link from "next/link"
import { CounterFood } from "./CounterFood"
import { Button } from "./Button"
import { handleAmountChange } from "@/utils/handleAmountChange"

interface FoodCardProps {
  food: Food,
  type: string,
  favoriteFood: ( id: string) => void 
}

export function FoodCard({ food, favoriteFood, type } : FoodCardProps) {
  const [amount, setAmount] = useState<number>(1)

  function handleAmount(quantity: number) {
   setAmount(handleAmountChange(amount, quantity))
  }

  return (
    <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg ease-in'>
      <Heart size={24} className={`absolute top-2 right-4 text-zinc-100 hover:fill-zinc-100 ${food.isFavorited ? 'fill-zinc-100' : null} cursor-pointer transition-all`} onClick={() => favoriteFood(food.id)}/>

      <Image src={food.img} alt='Imagem de um prato de spaguetti' className='rounded-full bg-cover'/>
      
      <Link href={{
        pathname: `/comida/${food.title.split(" ").join("")}`,
        query: {
          id: food.id,
          type
        }
      }}>
        <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
          {food.title} {'>'} 
        </h3>
      </Link>

      <p className='text-zinc-400 text-sm font-roboto font-normal break-words text-center'>
        {food.description}
      </p>

      <p className='font-roboto text-3xl text-center text-blue-300'>
        R$ {food.price}
      </p>

      <div className='flex gap-4 justify-center items-center'>
         <CounterFood amount={amount} setAmount={handleAmount}/>
        
        <Button.Root>
          <Button.Text content="incluir"/>
        </Button.Root>
      </div>
    </div>
  )
}