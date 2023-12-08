import axios from "./axios";

export const getProductsService = async () => {
  try {
    const res = await axios({ url: '/products', method: "GET" })
    return res
  } catch (err) {
    return err
  }
}
