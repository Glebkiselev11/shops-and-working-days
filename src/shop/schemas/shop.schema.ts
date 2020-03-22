import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
  address: { type: String, required: true },
  title: { type: String, required: true},
  

});