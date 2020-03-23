import { IAddress } from "../interfaces/address.interface";

export class CreateShopDto {
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