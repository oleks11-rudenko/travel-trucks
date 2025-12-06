import css from './SearchField.module.css';

interface SearchFieldProps {
  initialValue: string;
  onSearchChange: (newSearchQuery: string) => void;
}

export default function SearchField({ initialValue, onSearchChange }: SearchFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <label className={css.label}>
      Location
      <svg className={css.icon} width="20" height="20">
        <use href="/icons.svg#map"></use>
      </svg>
      <input
        className={css.input}
        type="text"
        placeholder="City"
        defaultValue={initialValue}
        onChange={handleChange}
      />
    </label>
  );
}
