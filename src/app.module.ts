import { Module } from '@nestjs/common';
import { CalcModule } from './Cacl/calc.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RenderModule } from 'nest-next';
import Next from 'next';
import * as path from 'path';

@Module({
  imports: [
    CalcModule,
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, './', 'static'),
    }),
  ],
})
export class AppModule {}
