import { API_OPTIONS } from './constants';
import { 
  ICryptoCurrencyListOptions,
  ICryptoCurrencyListResponse,
} from './types';

export async function getCryptoCurrencyList({ limit }: ICryptoCurrencyListOptions): Promise<ICryptoCurrencyListResponse> {
  try {
    const response = await fetch(`/v1/cryptocurrency/listings/latest?limit=${limit}`, API_OPTIONS);
    return await response.json();
  } catch(error) {
    return { data: [] };
  }
}
