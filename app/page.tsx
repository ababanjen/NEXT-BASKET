"use client"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { getProductsService } from "@/helpers/request/services"
import { formatCurrency, imgLoader } from "@/helpers/utils"
import Rating from "./components/rating"
import RoundContainer from "./components/roundContainer"
import ShareIcon from "./components/icons/share"
import HeartIcon from "./components/icons/heart"

export default function Home() {
  const [products, setProducts] = useState<null | any[]>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const result: any = await getProductsService()
    setProducts(result.products ?? null)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='columns-5 max-w-7xl mx-auto space-y-4'>
        {products?.map(product => (
          <div key={product.id} className="flex flex-col shadow group/item ">
            <div className="flex flex-col p-2 justify-between gap-2 overflow-hidden" >
              <div className="relative">
                <Image
                  loader={imgLoader}
                  src={product.images[0]}
                  alt={product.title}
                  height={300}
                  width={200}
                />
                <div className="absolute right-0 top-20 invisible group-hover/item:visible">
                  <div className="flex flex-col gap-2">
                    <RoundContainer>
                      <ShareIcon />
                    </RoundContainer>
                    <RoundContainer>
                      <HeartIcon />
                    </RoundContainer>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">{product.brand}</span>
                <span className="text-[14px] font-semibold">{product.title}</span>
                <span className="text-base font-semibold mt-6">{formatCurrency(product.price)}</span>
              </div>
              <div className="flex gap-1 items-center">
                {[...new Array(5)].map((_, key) => (
                  <Rating key={key} />
                ))}
                <span className="text-xs mt-1">{`(${product.rating})`}</span>
              </div>
            </div>
            <div className=" invisible group-hover/item:visible flex justify-center p-2 mt-2 cursor-pointer hover:bg-gray-100 capitalize border-t border-black">
              <span className=""> Add to basket</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
