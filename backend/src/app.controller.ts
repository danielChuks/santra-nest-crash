import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { data, ReportType } from './data';
import { v1 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReport(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createIncomingReport(
    @Body() body: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateIncomeReport(
    @Body() body: { amount: number; source: string },
    @Param('type') type: string,
    @Param('id') id: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reportToUpdate = data.report.find(
      (report) => report.type === reportType && report.id === id,
    );

    if (!reportToUpdate) {
      // Report not found, handle accordingly (e.g., return a 404 response)
      throw new NotFoundException('Report not found');
    }

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };

    return data.report[reportIndex];
  }

  @Delete(':id')
  deleteIncomeReportById() {
    return { status: ' report deleted' };
  }
}
