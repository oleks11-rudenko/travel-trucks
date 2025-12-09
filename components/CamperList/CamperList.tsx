import Image from 'next/image';
import { Camper } from '@/types/camper';

import { useFavouriteTruckStore } from '@/lib/store/favouriteStore';
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation';
import css from './CamperList.module.css';
import LinkBtn from '../Link/LinkBtn';
import EquipmentList from '../EquipmentList/EquipmentList';

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  const { favourites, toggleFavourite } = useFavouriteTruckStore();

  return (
    <ul className={css.list}>
      {campers.map((camper) => {
        const isFavourite = favourites.some((item) => item.id === camper.id);
        return (
          <li className={css.item} key={camper.id}>
            <Image
              className={css.image}
              src={camper.gallery[0].thumb}
              alt={camper.name}
              width={292}
              height={320}
            />
            <div className={css.generalInfo}>
              <div className={css.namePriceAndFavourite}>
                <div className={css.namePriceAndFavouriteWrapper}>
                  <h2 className={css.nameAndPrice}>{camper.name}</h2>
                  <div className={css.priceAndHeart}>
                    <p className={css.nameAndPrice}>€{camper.price.toFixed(2)}</p>
                    <button className={css.heartButton} onClick={() => toggleFavourite(camper)}>
                      <svg
                        className={`${css.heartIcon} ${isFavourite ? css.heartIconActive : ''}`}
                        width="26"
                        height="24"
                      >
                        <use href="/icons.svg#heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <RatingAndLocation camper={camper} />
              </div>
              <p className={css.description}>{camper.description.slice(0, 68)}...</p>
              <EquipmentList camper={camper} showEquip={6} />
              <LinkBtn horizontalPaddings="40px" href={`/catalog/${camper.id}`}>
                Show more
              </LinkBtn>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
