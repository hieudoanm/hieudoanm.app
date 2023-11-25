import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../../../../../../common/prisma';
import { DAYS_OF_WEEK, DRAW_RESULTS, LOSS_RESULTS, RULE, TIME_OF_DAYS,
  WIN_RESULTS } from '../../insights.constants';
import { Accuracy, AccuracyByDayOfWeek, AccuracyByPeriod,
  AccuracyByTimeOfDay } from './accuracy.types';

export class AccuracyService {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = getPrismaClient();
  }

  private buildAccuracyByResultsQuery(
    {
      averageClause,
      whereClause,
      username
    }: { averageClause: string; whereClause: string; username: string; },
    results: string[] = []
  ): Prisma.Sql {
    const list: string = results.map((result) => `'${result}'`).join(',');
    const clause =
      `TEXT(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteResult" ELSE g."blackResult" END) in (${list})`;
    const averageQuery =
      `SELECT ${averageClause} FROM public."Game" as g WHERE ${whereClause} AND ${clause}`;
    const sql: Prisma.Sql = Prisma.raw(averageQuery);
    return sql;
  }

  private async getAccuracyByResults({
    averageClause,
    whereClause,
    username
  }: {
    averageClause: string;
    whereClause: string;
    username: string;
  }): Promise<{ win: number; draw: number; loss: number; }> {
    const winQuery = this.buildAccuracyByResultsQuery(
      { averageClause, whereClause, username },
      WIN_RESULTS
    );
    const drawQuery = this.buildAccuracyByResultsQuery(
      { averageClause, whereClause, username },
      DRAW_RESULTS
    );
    const lossQuery = this.buildAccuracyByResultsQuery(
      { averageClause, whereClause, username },
      LOSS_RESULTS
    );
    const [
      [{ average: win = 0 }],
      [{ average: draw = 0 }],
      [{ average: loss = 0 }]
    ] = await this.prismaClient.$transaction([
      this.prismaClient.$queryRaw<{ average: number; }[]>(winQuery),
      this.prismaClient.$queryRaw<{ average: number; }[]>(drawQuery),
      this.prismaClient.$queryRaw<{ average: number; }[]>(lossQuery)
    ]);

    return { win, draw, loss };
  }

  private buildAverageAccuracyQuery({
    averageClause,
    whereClause
  }: {
    averageClause: string;
    whereClause: string;
  }) {
    const averageQuery =
      `SELECT ${averageClause} FROM public."Game" as g WHERE ${whereClause}`;
    const sql: Prisma.Sql = Prisma.raw(averageQuery);
    return sql;
  }

  private buildAverageAccuracyByPeriods({
    averageClause,
    whereClause
  }: {
    averageClause: string;
    whereClause: string;
  }): Prisma.Sql {
    const groupByClause = `GROUP BY extract(year from g."endTime")`;
    const extractClause = 'extract(year from g."endTime")::int as "period"';
    const query =
      `SELECT ${extractClause}, ${averageClause} FROM public."Game" as g WHERE ${whereClause} ${groupByClause}`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildAverageAccuracyByTimeOfDays({
    averageClause,
    whereClause
  }: {
    averageClause: string;
    whereClause: string;
  }): Prisma.Sql {
    const groupByClause = `GROUP BY "timeOfDayIndex"`;
    const extractClause =
      'floor(extract(hour from g."endTime") / 6.0)::int as "timeOfDayIndex"';
    const query =
      `SELECT ${extractClause}, ${averageClause} FROM public."Game" as g WHERE ${whereClause} ${groupByClause}`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private buildAverageAccuracyByDaysOfWeek({
    averageClause,
    whereClause
  }: {
    averageClause: string;
    whereClause: string;
  }): Prisma.Sql {
    const groupByClause = `GROUP BY "dayOfWeekIndex"`;
    const extractClause = 'extract(dow from g."endTime") as "dayOfWeekIndex"';
    const query =
      `SELECT ${extractClause}, ${averageClause} FROM public."Game" as g WHERE ${whereClause} ${groupByClause}`;
    const sql: Prisma.Sql = Prisma.raw(query);
    return sql;
  }

  private async getAverageAccuracy({
    averageClause,
    whereClause
  }: {
    averageClause: string;
    whereClause: string;
  }): Promise<{
    average: number;
    periods: AccuracyByPeriod[];
    timeOfDays: AccuracyByTimeOfDay[];
    daysOfWeek: AccuracyByDayOfWeek[];
  }> {
    const averageAccuracyQuery = this.buildAverageAccuracyQuery({
      averageClause,
      whereClause
    });
    const averageAccuracyByPeriodsQuery = this.buildAverageAccuracyByPeriods({
      averageClause,
      whereClause
    });
    const averageAccuracyByTimeOfDaysQuery = this
      .buildAverageAccuracyByTimeOfDays({
        averageClause,
        whereClause
      });
    const averageAccuracyByDaysOfWeekQuery = this
      .buildAverageAccuracyByDaysOfWeek({
        averageClause,
        whereClause
      });
    const [
      [{ average = 0 }],
      periods = [],
      timeOfDaysList = [],
      daysOfWeekList = []
    ] = await this.prismaClient.$transaction([
      this.prismaClient.$queryRaw<{ average: number; }[]>(
        averageAccuracyQuery
      ),
      this.prismaClient.$queryRaw<AccuracyByPeriod[]>(
        averageAccuracyByPeriodsQuery
      ),
      this.prismaClient.$queryRaw<
        { average: number; timeOfDayIndex: number; }[]
      >(averageAccuracyByTimeOfDaysQuery),
      this.prismaClient.$queryRaw<
        { average: number; dayOfWeekIndex: number; }[]
      >(averageAccuracyByDaysOfWeekQuery)
    ]);
    return {
      average,
      periods,
      timeOfDays: timeOfDaysList.map(
        ({ average: averageOfTimeOfDays, timeOfDayIndex }) => ({
          average: averageOfTimeOfDays,
          timeOfDay: TIME_OF_DAYS[`${timeOfDayIndex}`]
        })
      ),
      daysOfWeek: daysOfWeekList.map(
        ({ average: averageOfDaysOfWeek, dayOfWeekIndex }) => ({
          average: averageOfDaysOfWeek,
          dayOfWeek: DAYS_OF_WEEK[`${dayOfWeekIndex}`]
        })
      )
    };
  }

  public async getAccuracy(username: string): Promise<Accuracy> {
    const averageClause =
      `AVG(CASE WHEN g."whiteUsername" = '${username}' THEN g."whiteAccuracy" ELSE g."blackAccuracy" END) as "average"`;
    const whereClause =
      `g."whiteAccuracy" != 0 AND g."blackAccuracy" != 0 AND g."rules" = '${RULE}' AND g."rated" = true`;
    // Average
    const {
      average = 0,
      periods = [],
      timeOfDays = [],
      daysOfWeek = []
    } = await this.getAverageAccuracy({ averageClause, whereClause });
    const {
      win = 0,
      draw = 0,
      loss = 0
    } = await this.getAccuracyByResults({
      averageClause,
      whereClause,
      username
    });
    return { average, win, draw, loss, periods, timeOfDays, daysOfWeek };
  }
}
