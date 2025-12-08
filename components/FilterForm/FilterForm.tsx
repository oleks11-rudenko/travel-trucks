'use client';

import { vehicleEquipments, vehicleTypes } from '@/constants/filtersConfig';
import { Filters } from '@/types/filter';
import css from './FilterForm.module.css';

interface FilterFormProps {
  setFilters: (values: Filters) => void;
}

export default function FilterForm({ setFilters }: FilterFormProps) {
  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    const cleanedValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== '')
    );
    setFilters(cleanedValues);
  };

  return (
    <>
      <form className={css.filterForm} action={handleSubmit}>
        <label className={css.locationLabel}>
          Location
          <svg className={css.locationIcon} width="20" height="20">
            <use href="/icons.svg#map"></use>
          </svg>
          <input className={css.locationInput} type="text" placeholder="City" name="location" />
        </label>

        <h2 className={css.filters}>Filters</h2>
        <div className={css.equipment}>
          <h3 className={css.title}>Vehicle equipment</h3>
          <ul className={css.list}>
            {vehicleEquipments.map((equipment) => (
              <li className={css.item} key={equipment.key}>
                <label className={css.label}>
                  <svg className={css.icon} width="32" height="32">
                    <use href={`/icons.svg#${equipment.icon}`}></use>
                  </svg>
                  <input
                    className={css.input}
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
          <h3 className={css.title}>Vehicle type</h3>
          <ul className={css.list}>
            {vehicleTypes.map((type) => (
              <li className={css.item} key={type.key}>
                <label className={css.label}>
                  <svg className={css.icon} width="32" height="32">
                    <use href={`/icons.svg#${type.icon}`}></use>
                  </svg>
                  <input className={css.input} type="radio" name="form" value={type.key} />
                  {type.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
}
