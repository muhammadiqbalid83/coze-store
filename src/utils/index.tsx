import axios, { AxiosInstance } from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch: AxiosInstance = axios.create({
  baseURL: productionUrl,
})

export const formatPrice = (price: number): string => {
  const dollarsAmount: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const generateAmountOptions = (number: number): JSX.Element[] => {
  return Array.from({ length: number }, (_, index) => {
    const amount: number = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
