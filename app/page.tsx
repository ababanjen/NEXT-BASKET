"use client"
import { useEffect, useState } from "react"
import { getProductsService } from "@/helpers/request/services"
import Card from "./components/card"
import withDialog, { withDialogTypes } from "./components/withDialog"
type Props = {} & withDialogTypes
const Home = ({ setShowDialog }: Props) => {
  const [products, setProducts] = useState<null | any[]>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const result: any = await getProductsService()
    setProducts(result.products ?? null)
  }

  return (
    <>
      <div className='columns-2 md:columns-3 lg:columns-5 max-w-7xl mx-auto space-y-4 m-6'>
        {products?.map(product => (
          <Card key={product.id} data={product} setShowDialog={setShowDialog} />
        ))}
      </div>
    </>
  )
}

export default withDialog(Home)