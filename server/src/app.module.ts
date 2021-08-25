import { Module } from '@nestjs/common';
import { CalcModule } from './Cacl/calc.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../src/', 'static'),
    }),
    CalcModule,
  ],
})

export class AppModule {}
