export interface EquipmentFilter {
  key: string;
  value: string | boolean;
  label: string;
  icon: string;
}

export const vehicleEquipments = [
  { key: 'transmission', value: 'automatic', label: 'Automatic', icon: 'transmission' },
  { key: 'engine', value: 'petrol', label: 'Petrol', icon: 'engine' },
  { key: 'AC', value: true, label: 'AC', icon: 'ac' },
  { key: 'bathroom', value: true, label: 'Bathroom', icon: 'bathroom' },
  { key: 'kitchen', value: true, label: 'Kitchen', icon: 'kitchen' },
  { key: 'TV', value: true, label: 'TV', icon: 'tv' },
  { key: 'radio', value: true, label: 'Radio', icon: 'radio' },
  { key: 'refrigerator', value: true, label: 'Refrigerator', icon: 'refrigerator' },
  { key: 'microwave', value: true, label: 'Microwave', icon: 'microwave' },
  { key: 'gas', value: true, label: 'Gas', icon: 'gas' },
  { key: 'water', value: true, label: 'Water', icon: 'water' },
];

export const vehicleTypes = [
  { key: 'alcove', label: 'Alcove', icon: 'alcove' },
  { key: 'fullyIntegrated', label: 'Fully Integrated', icon: 'fully_integrated' },
  { key: 'panelTruck', label: 'Van', icon: 'van' },
];
