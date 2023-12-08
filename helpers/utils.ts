export const imgLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
}

export const formatCurrency = (number: number) => {
  const result = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number,
  )
  return result
}


export const getPercentage = (n1: number, n2: number) => Math.trunc(((n1 / n2) * 100))
