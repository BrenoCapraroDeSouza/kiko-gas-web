import currency from 'currency.js';

import { changeSemisToDots, removeDots } from '@/utils';

export function formatCurrency(value: number): string {
  return currency(value)
    .format({
      decimal: ',',
      precision: 2,
      separator: '.',
      symbol: 'R$ ',
    })
    .toString();
}

export function currencyToNumber(value: string): number {
  return currency(changeSemisToDots(removeDots(value))).value;
}
