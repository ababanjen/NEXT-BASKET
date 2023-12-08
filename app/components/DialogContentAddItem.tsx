import useGlobalStore from "@/store/globals"
import Close from "./icons/close"
import { last } from "lodash"
import { formatCurrency, imgLoader } from "@/helpers/utils"
import Image from "next/image"

const DialogContentAddItem = ({ onClose }: { onClose: () => void }) => {
  const { cart } = useGlobalStore()
  const item = last(cart)

  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
          <div className="flex justify-between w-full">
            <h3 className="text-[18px] font-semibold leading-6 text-gray-900" id="modal-title">Successfully added to the basket</h3>
            <span className="cursor-pointer" onClick={onClose}>
              <Close />
            </span>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <Image loader={imgLoader} src={item.thumbnail} alt={item.title} width={100} height={100} />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold">{item.title}</span>
              <span className="text-xs font-semibold">{formatCurrency(item.price)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default DialogContentAddItem