'use client';

import { vehicleEquipments, vehicleTypes } from '@/constants/filtersConfig';
import { Filters } from '@/types/filter';
import css from './FilterForm.module.css';

interface FilterFormProps {
  setFilters: (values: Filters) => void;
}

export default function FilterForm({ setFilters }: FilterFormProps) {
  const handleSubmit = (formData: FormData) => {
    const entries = Object.fromEntries(formData.entries());
    const values = Object.fromEntries(
      Object.entries(entries).map(([key, value]) => [key, value === 'true' ? true : value])
    );
    setFilters(values as Filters);
  };

  return (
    <>
      <h2 className={css.filters}>Filter</h2>
      <form className={css.filterForm} action={handleSubmit}>
        <div className={css.equipment}>
          <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
          <ul className={css.equipmentList}>
            {vehicleEquipments.map((equipment) => (
              <li className={css.equipmentItem} key={equipment.key}>
                <label className={css.equipmentLabel}>
                  <svg className={css.equipmentIcon} width="32" height="32">
                    <use href={`/icons.svg#${equipment.icon}`}></use>
                  </svg>
                  <input
                    className={css.equipmentName}
                    type="checkbox"
                    name={equipment.key}
                    value={
                      typeof equipment.value === 'boolean'
                        ? String(equipment.value)
                        : equipment.value
                    }
                  />
                  {equipment.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={css.type}>
          <h3 className={css.typeTitle}>Vehicle type</h3>
          <ul className={css.typeList}>
            {vehicleTypes.map((type) => (
              <li className={css.typeItem} key={type.key}>
                <label className={css.typeLabel}>
                  <svg className={css.typeIcon} width="32" height="32">
                    <use href={`/icons.svg#${type.icon}`}></use>
                  </svg>
                  <input className={css.typeName} type="radio" name="form" value={type.key} />
                  {type.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit">Search</button>
      </form>
    </>
  );
}
