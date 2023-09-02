import { useState, useEffect } from 'react'
import { CounterFood } from './CounterFood'
import { handleAmountChange } from '@/utils/handleAmountChange'
import { Button } from '../Button'

interface AddFoodProps {
  price: number
}

export function AddFood({ price }: AddFoodProps) {
  const [amount, setAmount] = useState<number>(1)
  const [totalPrice, setTotalPrice] = useState<string>(price.toString())

  const handlePrice = (amount: number) => {
    const priceAmount = price * amount
    setTotalPrice(priceAmount.toFixed(2).toString())
  }

  function handleAmount(quantity: number) {
    setAmount(handleAmountChange(amount, quantity))
  }

  useEffect(() => {
    handlePrice(amount)
  }, [amount])

  return (
    <>
      <CounterFood amount={amount} setAmount={handleAmount}/>

      <Button.Root>
        <Button.Text>
          {`incluir ∙ R$${totalPrice.toString().replace(".", ",")}`}
        </Button.Text>
      </Button.Root>
    </> 
  )
}