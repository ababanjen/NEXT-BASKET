import Rating from "../components/rating"
import RoundContainer from "../components/roundContainer"
import ShareIcon from "../components/icons/share"
import HeartIcon from "../components/icons/heart"
import Image from 'next/image'
import { formatCurrency, getPercentage, imgLoader } from "@/helpers/utils"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import useGlobalStore from "@/store/global"
import { withDialogTypes } from "./withDialog"
type CardTypes = {
  data: any
} & withDialogTypes

const Card = ({ data, setShowDialog }: CardTypes) => {
  const { push } = useRouter()
  const { setCart, cart } = useGlobalStore()
  const addToBasket = () => {
    setCart(data)
    if (setShowDialog) setShowDialog(true)
  }
  const onSelectItem = () => push(`/${data.id}`)

  return (
    <div className="flex flex-col shadow group/item cursor-pointer">
      <div className="flex flex-col p-2 justify-between gap-2 overflow-hidden" onClick={onSelectItem}>
        <div className="relative w-full">
          <div className="relative w-full">
            {!data.stock && (
              <span className="text-white bg-black p-2 rounded text-xs absolute bg-opacity-[0.6] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Out of stock</span>
            )}
            {
              !!getPercentage(data.discountPercentage ?? 0, data.price) && <span className="bottom-1 left-1  text-red-500 absolute text-xs font-semibold">-{getPercentage(data.discountPercentage ?? 0, data.price)}%</span>}
            <div className="w-full">
              <Image
                loader={imgLoader}
                src={data.thumbnail}
                alt={data.thumbnail}
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="absolute right-0 top-20 invisible group-hover/item:visible z-10">
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
          <span className="text-xs">{data.brand}</span>
          <span className="text-[14px] font-semibold">{data.title}</span>
          <span className="text-base font-semibold mt-6">{formatCurrency(data.price)}</span>
        </div>
        <div className="flex gap-1 items-center">
          {[...new Array(5)].map((_, key) => (
            <Rating key={key} />
          ))}
          <span className="text-xs mt-1">{`(${data.rating})`}</span>
        </div>
      </div>
      <div className={
        clsx({
          "invisible group-hover/item:visible flex justify-center p-2 mt-2  capitalize border-t border-black": true,
          "cursor-pointer hover:bg-gray-100": !!data.stock,
          "cursor-not-allowed bg-gray-200": !data.stock,
        })
      }
        onClick={addToBasket}
      >
        <span className=""> Add to basket</span>
      </div>
    </div>
  )

}

export default Card