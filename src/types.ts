export type CompanyType = {
  ein: string;
  name: string;
  state: string;
  numEmployees: number;
  year: number;
  premiumSum: number;
  participants: number;
  brokerCommission: number;
};

export type Maybe<T> = T | null;

export enum ApiStatus {
  PENDING,
  SUCCESS,
  ERROR,
}
