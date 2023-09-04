import { ICryptoCurrency } from '../shared';

export interface ICryptoCurrencyListOptions {
  limit: number;
}

export interface ICryptoCurrencyListResponse {
  data: ICryptoCurrency[];
}
