import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IShop } from './interfaces/shop.interface';
import { Model } from 'mongoose';

@Injectable()
export class ShopService {
  constructor(@InjectModel('Shop') private readonly shopModel: Model<IShop>) {}
}
