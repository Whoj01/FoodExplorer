import Image from 'next/image'
import Tortas from '@/assets/Images/tortas.png'
import { FoodContainer } from '@/components/FoodContainer'
import { foodsTest } from '@/utils/fakeFoodData'

export default function Home() {
  return ( 
    <>
      <section className='px-28 mb-16'>
          <div className='grid grid-cols-2 justify-end items-center max-w-screen bg-black-300 bg-gradient-to-t from-black-200 to-black-500 h-64 relative rounded-lg'>
            <div>
              <Image src={Tortas} alt='Tortas' className='bottom-0 -left-14 absolute'/>
            </div>

            <div className='flex flex-col gap-2 rounded-lg'>
              <h3 className='font-poppins font-medium text-[40px] text-zinc-100'>
                Sabores inigualáveis
              </h3>

              <p className='font-roboto font-normal text-base text-zinc-100'>
                Sinta o cuidado do preparo com ingredientes selecionados
              </p>
            </div>
          </div>
      </section>

      <main className='flex flex-col gap-12 mb-12'>
        {foodsTest.map(foods => <FoodContainer data={foods}/>)}
      </main>
    </>
  )
}