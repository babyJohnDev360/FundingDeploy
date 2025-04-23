/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'FundingPips copy', 'dist', 'flexy'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
