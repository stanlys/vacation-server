import { Body, Controller, Post } from '@nestjs/common';
import { Vacation } from './vacation.entity';
import { VacationService } from './vacation.service';

@Controller('vacation')
export class VacationController {
  constructor(private vacationService: VacationService) {}

  @Post()
  async createVacation(@Body() body: Vacation) {
    return this.vacationService.createVacation(body);
  }
}
