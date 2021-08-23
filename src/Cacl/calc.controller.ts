import { Controller, Get } from '@nestjs/common';
import { CalcService } from './cacl.service';

@Controller()
export class CaclController {
    constructor(private readonly calcService: CalcService) {}

    @Get()
    getHello(): string {
        return this.calcService.getHello();
    }
}