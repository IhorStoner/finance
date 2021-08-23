import { Module } from '@nestjs/common';
import { CalcModule } from './Cacl/calc.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    CalcModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../', 'static'),
    }),
  ],
})
export class AppModule {}
