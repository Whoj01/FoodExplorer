import { useState, useEffect } from 'react'
import { CounterFood } from './CounterFood'
import { handleAmountChange } from '@/utils/handleAmountChange'
import { Button } from '../Button'
import { useCartStore } from '@/store/cart'
import { Food, foodsTest } from '@/utils/fakeFoodData'

interface AddFoodProps {
  price: number,
  food: Food,
}

export function AddFood({ price, food }: AddFoodProps) {
  const {actions: { addNewItemCart } } = useCartStore()
  const [amount, setAmount] = useState<number>(1)
  const [totalPrice, setTotalPrice] = useState<string>(price.toString())

  const handlePrice = (amount: number) => {
    const priceAmount = price * amount
    setTotalPrice(priceAmount.toFixed(2).toString())
  }

  function handleAmount(quantity: number) {
    setAmount(handleAmountChange(amount, quantity))
  }

  function handleAddStoreCart() {
    const itemCart = {
      id: food.id,
      name: food.title,
      amount,
      totalPrice: +totalPrice,
      img: food.img,
    } 

    addNewItemCart(itemCart)
  }

  useEffect(() => {
    handlePrice(amount)
  }, [amount])

  return (
    <>
      <CounterFood amount={amount} setAmount={handleAmount}/>

      <Button.Root onClick={handleAddStoreCart}>
        <Button.Text>
          {`incluir ∙ R$${totalPrice.toString().replace(".", ",")}`}
        </Button.Text>
      </Button.Root>
    </> 
  )
}