import { Controller, Get } from '@nestjs/common';
import { CalcService } from './cacl.service';

@Controller('/api')
export class CaclController {
  constructor(private readonly calcService: CalcService) {}

  @Get('/getHello')
  getHello(): string {
    return this.calcService.getHello();
  }
}
