export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

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
