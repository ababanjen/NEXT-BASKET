import { ReactNode } from "react"

type RoundContainerTypes = {
  children: ReactNode
}
const RoundContainer = ({ children }: RoundContainerTypes) => {
  return (
    <div className="rounded-full bg-white w-[3rem] h-[3rem] flex justify-center items-center shadow-sm hover:bg-gray-100">
      <span>
        {children}
      </span>
    </div>
  )
}

export default RoundContainer