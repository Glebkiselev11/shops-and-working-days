import { Document } from 'mongoose';
import { IAddress } from './address.interface';

export interface IShop extends Document {
  readonly address: IAddress;
  readonly title: string;
  readonly shopType: string[];
  readonly weekend: number[];
  readonly beginingWorkDay: string;
  readonly endWorkDay: string;
  readonly break: string;
  readonly phone: string;
  readonly email: string;
}