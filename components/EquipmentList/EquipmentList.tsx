import { vehicleEquipments } from '@/constants/filtersConfig';
import css from './EquipmentList.module.css';
import { Camper } from '@/types/camper';

interface EquipmentListProps {
  camper: Camper;
  showEquip: number;
}

export default function EquipmentList({ camper, showEquip }: EquipmentListProps) {
  const camperEquipment = vehicleEquipments.filter((equip) => {
    const camperValue = camper[equip.key as keyof Camper];
    if (typeof equip.value === 'string') {
      return true;
    }
    if (typeof equip.value === 'boolean') {
      return camperValue === equip.value;
    }
    return false;
  });
  const visibleEquipment = camperEquipment.slice(0, showEquip);
  return (
    <ul className={css.equipmentList}>
      {visibleEquipment.map((equip) => {
        if (typeof equip.value === 'string') {
          return (
            <li className={css.equipmentItem} key={equip.key}>
              <svg className={css.equipmentIcon} width="20" height="20">
                <use href={`/icons.svg#${equip.icon}`}></use>
              </svg>
              <span className={css.equipmentText}>
                {camper[equip.key as keyof Camper] as string}
              </span>
            </li>
          );
        }
        return (
          <li className={css.equipmentItem} key={equip.key}>
            <svg className={css.equipmentIcon} width="20" height="20">
              <use href={`/icons.svg#${equip.icon}`}></use>
            </svg>
            <span className={css.equipmentText}>{equip.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
