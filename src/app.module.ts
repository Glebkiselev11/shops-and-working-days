import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'

import { ShopsModule } from './shops/shops.module';
import { OwnerModule } from './owner/owner.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ShopsModule, 
    OwnerModule,

    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ),
  ],
})
export class AppModule {}
