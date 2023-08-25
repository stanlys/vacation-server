import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    // return 'Get all vacations';
    return this.vacationService.getAllVacation();
  }

  @Get(':year')
  async getVacationsByYear(@Param('year') year: string) {
    return this.vacationService.getVacationsByYear(year);
  }
}
