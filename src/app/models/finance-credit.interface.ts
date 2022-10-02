export interface IFinanceCredit {
  id: string;
  name: string;
  description: string;
  account : number;
  value: number;
  date: Date | string;
  status: string;
}
