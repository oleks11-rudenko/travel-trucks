import { Camper } from './camper';

export interface Filters {
  location?: Camper['location'];
  form?: Camper['form'];
  transmission?: Camper['transmission'];
  engine?: Camper['engine'];
  AC?: string | boolean;
  bathroom?: string | boolean;
  kitchen?: string | boolean;
  TV?: string | boolean;
  radio?: string | boolean;
  refrigerator?: string | boolean;
  microwave?: string | boolean;
  gas?: string | boolean;
  water?: string | boolean;
}
