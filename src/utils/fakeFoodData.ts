import { StaticImageData } from "next/image"

import Spaguetti from '@/assets/Images/spaguetti-gambe.png'
import Torradas from '@/assets/Images/TorradasParma.png'
import Salada from '@/assets/Images/Salada.png'
import Macarons from '@/assets/Images/Macarons.png'
import Peachy from '@/assets/Images/Peachy.png'
import Prugna from '@/assets/Images/Prugna.png'
import Autunno from '@/assets/Images/Autunno.png'
import Espresso from '@/assets/Images/Espresso.png'
import Maracuja from '@/assets/Images/SucoMaracuja.png'

export interface Food {
  id: string,
  img: StaticImageData,
  title: string,
  isFavorited: boolean,
  price: string,
  description: string,
}

export interface Foods {
  type: string,
  data: Array<Food>
}


export const foodsTest : Array<any> = [
  {
   type: "Refeições",
   data: [{
     id: '1',
     img: Spaguetti,
     title: "Spaguetti Gambe",
     isFavorited: false,
     price: "76,97",
     description: "Massa fresca com camarões e pesto." 
   },
   {
     id: '2',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim" 
   },
   { 
     id: '3',
     img: Torradas,
     title: "Torradas de Parma",
     isFavorited: false,
     price: "25,97",
     description: "Presunto de parma e rúcula em um pão com fermentação natural."
   },
   {
     id: '5',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '6',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '7',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '8',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '9',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '10',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '11',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '12',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
   {
     id: '13',
     img: Salada,
     title: "Salada Ravanello",
     isFavorited: false,
     price: "49,97",
     description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", 
   },
    ]
 },
 {
  type: "Sobremesas",
  data: [
    {
      id: '1',
      img: Prugna,
      title: "Prugna Pie",
      isFavorited: false,
      price: "79,97",
      description: "Torta de ameixa com massa amanteigada, polvilho em açucar.", 
    },
    {
      id: '2',
      img: Macarons,
      title: "Macarons",
      isFavorited: false,
      price: "79,97",
      description: "Farinha de amêndoas, manteiga, claras e açúcar.", 
    },
    {
      id: '3',
      img: Peachy,
      title: "Peachy pastrie",
      isFavorited: false,
      price: "79,97",
      description: "Delicioso folheado de pêssego com folhas de hortelã.", 
    },
    {
      id: '4',
      img: Peachy,
      title: "Peachy pastrie",
      isFavorited: false,
      price: "79,97",
      description: "Delicioso folheado de pêssego com folhas de hortelã.", 
    },
    {
      id: '5',
      img: Prugna,
      title: "Prugna Pie",
      isFavorited: false,
      price: "79,97",
      description: "Torta de ameixa com massa amanteigada, polvilho em açucar.", 
    },
    {
      id: '6',
      img: Macarons,
      title: "Macarons",
      isFavorited: false,
      price: "79,97",
      description: "Farinha de amêndoas, manteiga, claras e açúcar.", 
    },
    {
      id: '7',
      img: Peachy,
      title: "Peachy pastrie",
      isFavorited: false,
      price: "79,97",
      description: "Delicioso folheado de pêssego com folhas de hortelã.", 
    },
    {
      id: '8',
      img: Prugna,
      title: "Prugna Pie",
      isFavorited: false,
      price: "79,97",
      description: "Torta de ameixa com massa amanteigada, polvilho em açucar.", 
    },
  ]  
 },
 {
  type: "Bebidas",
  data: [
    {
      id: '1',
      img: Autunno,
      title: "Tè d'autunno",
      isFavorited: false,
      price: "19,97",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.", 
    },
    {
      id: '2',
      img: Maracuja,
      title: "Suco de maracujá",
      isFavorited: false,
      price: "13,97",
      description: "Suco de maracujá gelado, cremoso, docinho.", 
    },
    {
      id: '3',
      img: Espresso,
      title: "Expresso",
      isFavorited: false,
      price: "15,97",
      description: "Café cremoso feito na temperatura e pressões perfeitas.", 
    },
    {
      id: '4',
      img: Autunno,
      title: "Tè d'autunno",
      isFavorited: false,
      price: "19,97",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.", 
    },
    {
      id: '5',
      img: Maracuja,
      title: "Suco de maracujá",
      isFavorited: false,
      price: "13,97",
      description: "Suco de maracujá gelado, cremoso, docinho.", 
    },
    {
      id: '6',
      img: Espresso,
      title: "Expresso",
      isFavorited: false,
      price: "15,97",
      description: "Café cremoso feito na temperatura e pressões perfeitas.", 
    },
    {
      id: '7',
      img: Autunno,
      title: "Tè d'autunno",
      isFavorited: false,
      price: "19,97",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.", 
    },
  ]
 }
]
