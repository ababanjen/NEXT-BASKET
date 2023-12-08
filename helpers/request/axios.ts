import axios from "axios";

type AxiosTypes = {
  method: string;
  url?: string;
  data?: any;
  params?: any;
};
const axiosRequest = ({ method = "GET", url, ...restProps }: AxiosTypes) =>
  axios({
    method,
    url: `https://dummyjson.com${url}`,
    headers: {
      "Content-Type": "application/json",
    },
    ...restProps,
  })
    .then(res => res.data)
    .catch(err => err);

export default axiosRequest;
