export type Currency = {
  name: string;
  symbol: string;
  code?: string;
};

export type CurrencyList = {
  [code: string]: Currency;
};

export type Country = {
  currencies?: { [code: string]: Currency };
};

export type CountryList = Country[];
