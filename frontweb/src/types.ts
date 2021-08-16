export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};

export type SalesByStore = {
  storeName: string;
  sum: number;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
