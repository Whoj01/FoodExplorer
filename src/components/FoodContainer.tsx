'use client'

import { useEffect, useRef, useState } from "react";
import { TitleText } from "./TitleText";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { FoodCard } from "./FoodCard";
import { Food } from "@/utils/fakeFoodData";

interface Data {
  type: string,
  data: Array<Food>
}

interface FoodContainerProps {
  data: Data
}

export function FoodContainer({ data } : FoodContainerProps) {
  const slideRef = useRef<HTMLDivElement>();
  const [scroll, setScroll] = useState<number>(0);
  const [isMaxScroll, setIsMaxScrool] = useState<boolean>(false)
  const [foods, setFoods] = useState<Food[]>(data.data)

  const favoriteFood = (id: string) => {
    const newFoods = foods.map(food => {
      if(food.id === id) {
        food.isFavorited = !food.isFavorited
        console.log('aqui')
      }
      return food
    })
   setFoods(newFoods)
  }

  function slide(side: boolean) {
    const amountToSlide = slideRef!.current!.children[0].clientWidth / 2 + 28
  
    if(side) {
      slideRef!.current!.scrollLeft += amountToSlide
    } else {
      slideRef!.current!.scrollLeft -= amountToSlide
    }

    setScroll(slideRef!.current!.scrollLeft)
  }

  useEffect(() => {
    if(Math.round(slideRef.current!.offsetWidth + scroll) >= slideRef!.current!.scrollWidth) {
      setIsMaxScrool(true)  
    } else {
      setIsMaxScrool(false)
    }
  }, [scroll])

  return (
    <section className='px-28 flex flex-col gap-12'>
       <div className='flex flex-col gap-6 relative'>
        <TitleText content={data.type} styles='text-left'/>

        <ChevronLeft size={40} className={`text-zinc-50 hover:text-zinc-200 transition-all absolute top-1/2 left-0 -translate-y-1/2 z-20 cursor-pointer ${scroll > 0 ? 'opacity-100 visible' : 'opacity-0 hidden'}`} onClick={() => slide(false)}/>
        <ChevronRight size={40} className={`text-zinc-50 hover:text-zinc-200 transition-all absolute top-1/2 right-0 -translate-y-1/2 z-20 cursor-pointer ${!isMaxScroll ? 'opacity-100 visible' : 'opacity-0 hidden'}`} onClick={() => slide(true)}/>

        <div className={`absolute w-[287px] h-[448px] -left-4 top-1/2 -translate-y-1/2  bg-gradient-to-r  from-black-50 to-back-100/20  blur-3xl z-10 ${scroll > 0 ? 'opacity-100 visible' : 'opacity-0 hidden'} transition-all`}/>
        <div className={`absolute w-[287px] h-[448px] -right-4 top-1/2 -translate-y-1/2  bg-gradient-to-l  from-black-50 to-back-100/20 blur-3xl z-10 ${!isMaxScroll ? 'opacity-100 visible' : 'opacity-0 hidden'} transition-all`}/>


        <div className='max-w-full gap-7 flex overflow-x-auto no-scrollbar overflow-y-hidden' ref={slideRef}>
          {foods.map(food => {
            return <FoodCard type={data.type} food={food} key={food.id} favoriteFood={favoriteFood}/>
          })}
        </div> 
       </div>  
    </section>
  )
}