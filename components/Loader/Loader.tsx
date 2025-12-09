import { ClockLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <ClockLoader color="#101828" />
    </div>
  );
}
