import { Module } from '@nestjs/common';
import { CalcModule } from './Cacl/calc.module';

@Module({
  imports: [CalcModule],
})
export class AppModule {}
