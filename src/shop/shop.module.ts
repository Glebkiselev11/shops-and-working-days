import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';

import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Shop', schema: ShopSchema},
    ]),
  ],
  providers: [ShopService],
  controllers: [ShopController]
})
export class ShopModule {}
