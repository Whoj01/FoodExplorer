import { SectionTitle } from "@/components/Layout/SectionTitle";
import Image from "next/image";
import { QrCode, CreditCard } from 'lucide-react'
import qrCode from "@/assets/svg/qrcode.svg" 
import { PedidosContainer } from "@/components/Pedidos/LeftSide/PedidosContainer";

export default function Pedidos() {
  return (
    <main className="px-28 grid grid-cols-2 gap-8 pt-8 pb-12">
      <section className="flex flex-col gap-8">
        <SectionTitle>
          Meu pedido
        </SectionTitle>

        <PedidosContainer/>

      </section>

      <section>
      <div className="flex flex-col gap-4">
          <SectionTitle>
            Pagamento
          </SectionTitle>

          <div className="min-h-[445px] flex flex-col border border-slate-700 rounded-lg">
            <div className="grid grid-cols-2 w-100  min-h-[81px] border-b border-slate-700">
              <div className="border-r border-slate-700 flex gap-2 justify-center items-center flex-grow">
                <QrCode size={24} color="#fff"/>

                <p className="font-roboto font-normal text-base text-zinc-200">
                  Pix
                </p>
              </div>

              <div className="border-r border-slate-700 flex gap-2 justify-center items-center flex-grow">
                <CreditCard size={24} color="#fff"/>

                <p className="font-roboto font-normal text-base text-zinc-200">
                  Crédito
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center w-100 h-[400px]">
              <Image height={250} width={250} src={qrCode} alt="Imagem de qrcode"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}