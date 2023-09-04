export interface ICryptoCurrency {
  id: number,
  name: string,
  symbol: string,
  slug: string,
  quote: {
    USD: {
      price: number,
      market_cap: number,
    },
  },
}
