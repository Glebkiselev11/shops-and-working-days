import { Schema } from 'mongoose';
import { shopType } from '../enums/shop-type.enum';

export const ShopSchema = new Schema({
  address: { 
    country: { type: String, default: null },
    city: { type: String, default: null },
    street: { type: String, default: null },
    building: { type: Number, default: null },
    floor: { type: Number, default: null },
    door: { type: Number, default: null },
  },
  title: { type: String, required: true },
  shopType: { 
    type: [String],
    required: true, 
    enum: Object.values(shopType),
  },
  weekend: { type: [Number], required: false },
  beginingWorkDay: { type: String, required: false },
  endWorkDay: { type: String, required: false },
  break: { type: String, required: false },
  phone: { type: String, default: null },
  email: { type: String, required: false},
});