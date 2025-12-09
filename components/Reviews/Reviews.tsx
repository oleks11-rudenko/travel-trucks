import css from './Reviews.module.css';

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={css.reviewsWrapper}>
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li className={css.reviewsItem} key={review.reviewer_name}>
            <div className={css.reviewsNameAndRatingWrapper}>
              <span className={css.reviewsImg}>{review.reviewer_name[0]}</span>
              <div className={css.reviewsNameAndRating}>
                <h2 className={css.reviewsName}>{review.reviewer_name}</h2>
                <ul className={css.starList}>
                  {Array.from({ length: 5 }, (_, index) => index + 1).map((mark) => (
                    <li className={css.starItem} key={mark}>
                      {mark <= review.reviewer_rating ? (
                        <svg className={css.filledStar} width="16" height="16">
                          <use href="/icons.svg#star"></use>
                        </svg>
                      ) : (
                        <svg className={css.noFilledStar} width="16" height="16">
                          <use href="/icons.svg#star"></use>
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
