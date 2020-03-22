import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'

import { ShopModule } from './shop/shop.module';
import { OwnerModule } from './owner/owner.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ShopModule, 
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
