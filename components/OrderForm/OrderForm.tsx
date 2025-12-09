import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../Button/Button';
import css from './OrderForm.module.css';

export default function OrderForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [placeholderText, setPlaceholderText] = useState('Booking date*');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!startDate) {
      setPlaceholderText('Select a date between today and future');
      setIsError(true);
      return;
    }

    setStartDate(null);
    setIsError(false);
    setPlaceholderText('Booking date*');
    event.currentTarget.reset();
  };

  const handleCalendarOpen = () => {
    if (isError) {
      setPlaceholderText('Booking date*');
      setIsError(false);
    }
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={`${css.formItem} ${css.input}`}
          type="text"
          placeholder="Name*"
          required
        />
        <input className={`${css.formItem} ${css.input}`} type="email" placeholder="Email*" />
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setIsError(false);
          }}
          minDate={new Date()}
          placeholderText={placeholderText}
          className={css.formItem}
          dateFormat="dd/MM/yyyy"
          onCalendarOpen={handleCalendarOpen}
          portalId="datepicker-portal"
        />
        <textarea className={`${css.formItem} ${css.textarea}`} placeholder="Comment" />
        <div className={css.button}>
          <Button horizontalPaddings="60px" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
