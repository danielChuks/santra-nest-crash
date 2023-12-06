export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
// Define the Data interface
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated: Date;
    type: ReportType;
  }[];
}

// Export a constant data of type Data
export const data: Data = {
  report: [
    {
      id: 'uuid',
      source: 'Salary',
      amount: 5750,
      created_at: new Date(),
      updated: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid',
      source: 'Salary',
      amount: 5750,
      created_at: new Date(),
      updated: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid',
      source: 'Salary',
      amount: 5750,
      created_at: new Date(),
      updated: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid',
      source: 'Salary',
      amount: 5750,
      created_at: new Date(),
      updated: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

// Push an object into the report array
data.report.push({
  id: 'uuid',
  source: 'Salary',
  amount: 5750,
  created_at: new Date(),
  updated: new Date(),
  type: ReportType.INCOME,
});
