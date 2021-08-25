import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RegistrationModule } from './Registration/registration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://IhorSakhno:123456789q@finance.duj2r.mongodb.net/Finance'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src/', 'static'),
    }),
    RegistrationModule,
  ],
})
export class AppModule {}
