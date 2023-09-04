"use client"

import { FoodProps, useCartStore } from "@/store/cart";
import Image from "next/image";

type PedidosCardProps = {
  food: FoodProps
}


export function PedidosCard({ food }: PedidosCardProps) {
  const { actions: { removeItemCart } } = useCartStore()

  return (
    <div className="w-full flex items-center py-4 px-4 gap-5 rounded">
    <Image height={72} width={72} src={food.img} alt={`Foto do prato ${food.name}`}/>

    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <h2 className="text-zinc-300 font-bold font-poppins text-xl">
          {`${food.amount} x ${food.name}`}
        </h2>

        <p className="font-roboto text-sm font-normal text-slate-400">
          R${food.totalPrice}
        </p>
      </div>

      <small onClick={() => removeItemCart(food.id)} className="text-red-400 text-xs font-roboto font-light w-[7ch] cursor-pointer hover:text-red-600 transition-colors">
        Excluir
      </small>
    </div>
  </div>
  )
}