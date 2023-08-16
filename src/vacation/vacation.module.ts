import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { Vacation } from './vacation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vacation])],
  providers: [VacationService],
  controllers: [VacationController],
})
export class VacationModule {}
