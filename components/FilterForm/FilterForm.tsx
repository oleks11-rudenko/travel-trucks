'use client';

import { vehicleEquipments, vehicleTypes } from '@/constants/filtersConfig';
import { Filters } from '@/types/filter';
import css from './FilterForm.module.css';
import { useFilterDraftStore } from '@/lib/store/filtersStore';
import Button from '../Button/Button';

interface FilterFormProps {
  setFilters: (values: Filters) => void;
}

export default function FilterForm({ setFilters }: FilterFormProps) {
  const { draftFilters, setDraftFilters, clearDraftFilters } = useFilterDraftStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      const isBooleanValue = value === 'true';
      let newValue;
      if (isBooleanValue) {
        newValue = checked;
      } else {
        newValue = checked ? value : '';
      }
      setDraftFilters({ ...draftFilters, [name]: newValue });
    } else {
      setDraftFilters({ ...draftFilters, [name]: value });
    }
  };

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    const cleanedValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== '')
    );
    clearDraftFilters();
    setFilters(cleanedValues);
  };

  const handleTypeClick = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault();
    if (draftFilters.form === value) {
      setDraftFilters({ ...draftFilters, form: '' });
    } else {
      setDraftFilters({ ...draftFilters, form: value });
    }
  };

  return (
    <>
      <form className={css.filterForm} action={handleSubmit}>
        <label className={css.locationLabel}>
          Location
          <svg className={css.locationIcon} width="20" height="20">
            <use href="/icons.svg#map"></use>
          </svg>
          <input
            className={css.locationInput}
            type="text"
            placeholder="City"
            name="location"
            defaultValue={draftFilters.location || ''}
            onChange={handleChange}
          />
        </label>

        <h2 className={css.filters}>Filters</h2>
        <div className={css.equipment}>
          <h3 className={css.title}>Vehicle equipment</h3>
          <ul className={css.list}>
            {vehicleEquipments.map((equipment) => {
              const isChecked =
                typeof equipment.value === 'boolean'
                  ? !!draftFilters[equipment.key as keyof Filters]
                  : draftFilters[equipment.key as keyof Filters] === equipment.value;
              return (
                <li className={css.item} key={equipment.key}>
                  <label className={css.label}>
                    <svg className={css.icon} width="32" height="32">
                      <use href={`/icons.svg#${equipment.icon}`}></use>
                    </svg>
                    <input
                      className={css.input}
                      type="checkbox"
                      name={equipment.key}
                      defaultValue={String(equipment.value)}
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    {equipment.label}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={css.type}>
          <h3 className={css.title}>Vehicle type</h3>
          <ul className={css.list}>
            {vehicleTypes.map((type) => (
              <li className={css.item} key={type.key}>
                <label className={css.label} onClick={(e) => handleTypeClick(e, type.key)}>
                  <svg className={css.icon} width="32" height="32">
                    <use href={`/icons.svg#${type.icon}`}></use>
                  </svg>
                  <input
                    className={css.input}
                    type="radio"
                    name="form"
                    defaultValue={type.key}
                    checked={draftFilters.form === type.key}
                    onChange={handleChange}
                  />
                  {type.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <Button horizontalPaddings="56px" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}
