'use client'

import { Heart, Minus, Plus } from "lucide-react"
import { useState } from "react"
import Spaguetti from '@/assets/Images/spaguetti-gambe.png'
import Image, { StaticImageData } from 'next/image'
import { Food } from "@/utils/fakeFoodData"

interface FoodCardProps {
  food: Food,
  favoriteFood: ( id: string) => void 
}

export function FoodCard({ food, favoriteFood } : FoodCardProps) {
  const [amount, setAmout] = useState<number>(0)

  return (
    <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg ease-in'>
      <Heart size={24} className={`absolute top-2 right-4 text-zinc-100 hover:fill-zinc-100 ${food.isFavorited ? 'fill-zinc-100' : null} cursor-pointer transition-all`} onClick={() => favoriteFood(food.id)}/>

      <Image src={Spaguetti} alt='Imagem de um prato de spaguetti' className='rounded-full bg-cover'/>
      
      <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
        {food.title} {'>'} 
      </h3>

      <p className='text-zinc-400 text-sm font-roboto font-normal break-words text-center'>
        {food.description}
      </p>

      <p className='font-roboto text-3xl text-center text-blue-300'>
        R$ {food.price}
      </p>

      <div className='flex gap-4 justify-center items-center'>
          <div className='flex gap-3 justify-center items-center'>
            <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer' onClick={() => setAmout(amount > 0 ? amount - 1 : amount)}/>

            <p className='font-roboto text-xl text-zinc-100 font-bold'>
              {amount}
            </p>

            <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer' onClick={() => setAmout(amount => amount += 1)}/>
          </div>
        
          <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
            incluir
          </button>
      </div>
    </div>
  )
}