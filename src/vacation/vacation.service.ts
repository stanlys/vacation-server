import { Injectable } from '@nestjs/common';
import { Vacation } from './vacation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VacationService {
  constructor(@InjectRepository(Vacation) private vacationRepository: Repository<Vacation>) {}

  async createVacation(vacation: Vacation): Promise<Vacation> {
    console.log('add', vacation);
    return this.vacationRepository.save(vacation);
  }
}
