import { create } from 'zustand'
import { uniqBy } from 'lodash'
type Pokemon = {
  cart: any[],
  setCart: (data: { (val: string): any }) => void

}

const useGlobalStore = create<Pokemon>((set) => ({
  cart: [],
  setCart: (payload: any) => set((state) => {
    const res = state.cart.filter(item => item.id !== payload.id)
    return ({ cart: uniqBy([...res, payload], "id") })
  })
}))
export default useGlobalStore