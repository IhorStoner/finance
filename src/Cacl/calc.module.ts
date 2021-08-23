import { Module } from '@nestjs/common';
import { CaclController } from './calc.controller';
import { CalcService } from './cacl.service';

@Module({
    imports: [],
    controllers: [CaclController],
    providers: [CalcService],
})
export class CalcModule {}