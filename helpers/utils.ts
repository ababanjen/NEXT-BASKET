export const imgLoader = ({ src }: any) => {
  return src;
}

export const formatCurrency = (number: number) => {
  const result = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number,
  )
  return result
}

