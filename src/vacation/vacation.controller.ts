import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Vacation } from './vacation.entity';
import { VacationService } from './vacation.service';

@Controller('vacation')
export class VacationController {
  constructor(private vacationService: VacationService) {}

  @Post()
  async createVacation(@Body() body: Vacation) {
    return this.vacationService.createVacation(body);
  }

  @Get()
  async getVacationsAll(): Promise<Array<Vacation>> {
    console.log('get vacation');
    return this.vacationService.getAllVacation();
  }

  @Get()
  getVacationByUser(@Query('userID') userID: string, @Query('year') year: string) {
    console.log(userID, '   ---  ', year);
  }

  @Get(':year')
  async getVacationsByYear(@Param('year') year: string) {
    return this.vacationService.getVacationsByYear(year);
  }
}
