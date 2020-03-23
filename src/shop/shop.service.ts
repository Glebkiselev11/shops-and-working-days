import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IShop } from './interfaces/shop.interface';
import { Model } from 'mongoose';
import { CreateShopDto } from './dto/create-shop.dto';

@Injectable()
export class ShopService {
  constructor(@InjectModel('Shop') private readonly shopModel: Model<IShop>) {};

  async create(createShopDto: CreateShopDto): Promise<IShop> {
    const createdShop = new this.shopModel(createShopDto);
    return await createdShop.save();
  };

  async find(id: string): Promise<IShop> {
    return await this.shopModel.findById(id).exec();
  };
};
