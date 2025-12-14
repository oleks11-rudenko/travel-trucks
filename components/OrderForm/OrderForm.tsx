import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import Button from '../Button/Button';
import css from './OrderForm.module.css';

export default function OrderForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [placeholderText, setPlaceholderText] = useState('Booking date*');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setIsSuccess(true);
  };

  const handleCalendarOpen = () => {
    if (isError) {
      setPlaceholderText('Booking date*');
      setIsError(false);
    }
  };

  const handleOverlayClick = () => {
    setIsSuccess(false);
  };

  return (
    <div className={css.formWrapper}>
      <div className={isSuccess ? css.blurred : ''}>
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
            calendarStartDay={1}
            formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3).toUpperCase()}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="custom-header">
                <button
                  className="nav-btn"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="#101828"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="month-title">
                  {date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <button
                  className="nav-btn"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="#101828"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          />

          <textarea className={`${css.formItem} ${css.textarea}`} placeholder="Comment" />
          <div className={css.button}>
            <Button horizontalPaddings="60px" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
      {isSuccess && (
        <div className={css.successOverlay} onClick={handleOverlayClick}>
          <div className={css.successMessage}>
            <h3 className={css.successTitle}>Thank you!</h3>
            <p className={css.successText}>Form successfully sent.</p>
          </div>
        </div>
      )}
    </div>
  );
}
