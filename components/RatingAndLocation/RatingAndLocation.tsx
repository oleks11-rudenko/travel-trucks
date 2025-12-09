import { Camper } from '@/types/camper';
import css from './RatingAndLocation.module.css';

interface RatingAndLocationProps {
  camper: Camper;
}

export default function RatingAndLocation({ camper }: RatingAndLocationProps) {
  return (
    <div className={css.ratingAndLocation}>
      <div className={css.ratingAndLocationWrapper}>
        <svg
          className={camper.reviews.length > 0 ? css.starIconFilled : css.starIconNotFilled}
          width="16"
          height="16"
        >
          <use href="/icons.svg#star"></use>
        </svg>
        <p
          className={css.reviewsAndLocationText}
        >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
      </div>
      <div className={css.ratingAndLocationWrapper}>
        <svg className={css.mapIcon} width="16" height="16">
          <use href="/icons.svg#map"></use>
        </svg>
        <p className={css.reviewsAndLocationText}>{camper.location}</p>
      </div>
    </div>
  );
}
