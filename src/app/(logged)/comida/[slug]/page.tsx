'use client'

import { AddFood } from "@/components/Food/AddFood"
import { Ingredient } from "@/components/Food/Ingredient"
import { TitleText } from "@/components/TitleText"
import { Food, foodsTest } from "@/utils/fakeFoodData"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

const Ingredients = [
   "alface", 
   "cebola", 
   "pão naan", 
   "pepino", 
   "rabanete",
   "tomate"
  ]

export default function Page({ params }: { params: { slug: string} }) {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const type = searchParams.get("type")

  let food: Food;

  foodsTest.map(foods => {
    if(foods.type !== type) return null 

    food = foods.data.find((food: Food) => food.id === id)
  })
  
  return (
    <div className="flex flex-col justify-start gap-10 px-28 mt-6 h-100">
      <Link href="/home" className="flex justify-start items-center text-zinc-100 hover:text-zinc-200 cursor-pointer transition-colors">
        <ChevronLeft size={32}/>

        <p className="font-bold font-poppins text-2xl ">voltar</p>
      </Link>

      <div className="grid grid-cols-2 items-center justify-start gap-12">
        <div className="flex items-center justify-center">
          <Image src={food!.img} width={390} height={390} alt="Comida" className=""/>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <TitleText content={food!.title} styles="text-5xl text-left"/>

            <p className="font-poppins text-2xl text-zinc-100">{food!.description}</p>

            <div className="flex gap-5 items-center flex-wrap">
              {Ingredients.map(ingredient => <Ingredient content={ingredient} key={ingredient}/>)}
            </div>
          </div>

          <div className="flex gap-8">
            <AddFood price={parseFloat(food!.price.replace(",", "."))} food={food!}/>
          </div>
        </div>     
      </div>
    </div>
  )
}