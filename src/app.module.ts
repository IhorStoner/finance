import { Module } from '@nestjs/common';
import { CalcModule } from './Cacl/calc.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { RenderModule } from 'nest-next';
import Next from 'next';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../src/', 'static'),
    }),
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    CalcModule,
  ],
})

export class AppModule {}
