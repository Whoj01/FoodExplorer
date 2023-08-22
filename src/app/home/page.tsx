import Image from 'next/image'

import { Heart, Plus, Minus } from 'lucide-react'
import { TitleText } from '@/components/TitleText'

import Spaguetti from '@/assets/Images/spaguetti-gambe.png'
import Tortas from '@/assets/Images/tortas.png'

export default function Home() {
  return (
    <>
      <section className='px-28 mb-16'>
          <div className='grid grid-cols-2 justify-end items-center  max-w-screen bg-black-300 bg-gradient-to-t from-black-200 to-black-500 h-64 relative rounded-lg'>
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

      <section className='px-28 flex flex-col gap-12'>
        <div className='flex flex-col gap-6'>
          <TitleText content='Refeições' styles='text-left'/>

          <div className='max-w-full gap-7 flex relative overflow-x-auto no-scrollbar overflow-y-hidden'>
              <div className='absolute w-[287px] h-[448px] left-0 top-1/2 -translate-y-1/2  bg-gradient-to-r  from-black-50 to-back-100/20  rounded-full blur-md z-10'/>
              <div className='absolute w-[287px] h-[448px] right-0 top-1/2 -translate-y-1/2  bg-gradient-to-l  from-black-50 to-back-100/20  rounded-full blur-3xl z-10'/>

              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>

              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>
 

              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>


              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>
              

              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>


              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>


              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>


              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>

              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>


              <div className='w-[304px] flex flex-col justify-center items-center gap-4 flex-shrink-0 px-6 py-6 bg-black-100 relative border border-black-50 rounded-lg'>
                 <Heart size={24} color='#fff' className='absolute top-2 right-4'/>

                 <Image src={Spaguetti} alt='Imagem de um prato de spaguetti'/>
                 
                 <h3 className='text-2xl font-bold font-poppins text-zinc-100 text-center leading-8'>
                  Spaguetti Gambe {'>'} 
                 </h3>

                 <p className='text-zinc-400 text-sm font-roboto font-normal truncate'>
                  Massa fresca com camarões e pesto.
                 </p>

                 <p className='font-roboto text-3xl text-center text-blue-300'>
                  R$ 79,97
                 </p>

                 <div className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                      <Minus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>

                      <p className='font-roboto text-xl text-zinc-100 font-bold'>
                        01
                      </p>

                      <Plus size={24} className='text-zinc-50 hover:text-zinc-300 transition-colors cursor-pointer'/>
                    </div>
                   
                    <button className='flex items-center justify-center px-8 py-3 gap-2 bg-red-900 hover:bg-red-700 transition-colors rounded-md cursor-pointer text-zinc-100'>
                      incluir
                    </button>
                 </div>
              </div>
 
          </div>
        </div>
      </section>
    </>
  )
}