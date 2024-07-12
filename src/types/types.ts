export type ReportHeader = {
  id: string;
  type: string;
  caption: string;
  align?: 'left' | 'right' | 'center';
}

export type ReportDataCell = string | number | { data: number; color: string };

export type Report = {
  header: ReportHeader[];
  data: Array<ReportDataCell[]>;
}