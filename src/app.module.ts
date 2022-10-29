import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tokens } from './config/constants';
import { loadMongoConfig } from './config/helpers/load-mongo-config.helper';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: loadMongoConfig,
    }),
  ],
  controllers: [AppController],
  providers: [{ provide: tokens.appService, useClass: AppService }],
})
export class AppModule {}
