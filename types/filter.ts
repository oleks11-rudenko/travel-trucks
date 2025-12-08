import { Camper } from './camper';

export interface Filters {
  location?: Camper['location'];
  form?: Camper['form'];
  transmission?: Camper['transmission'];
  engine?: Camper['engine'];
  AC?: string;
  bathroom?: string;
  kitchen?: string;
  TV?: string;
  radio?: string;
  refrigerator?: string;
  microwave?: string;
  gas?: string;
  water?: string;
}
