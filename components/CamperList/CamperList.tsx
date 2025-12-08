import Link from 'next/link';
import Image from 'next/image';
import { Camper } from '@/types/camper';
import { vehicleEquipments } from '@/constants/filtersConfig';
import css from './CamperList.module.css';
import { useFavouriteTruckStore } from '@/lib/store/favouriteStore';

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  const { favourites, toggleFavourite } = useFavouriteTruckStore();

  return (
    <ul className={css.list}>
      {campers.map((camper) => {
        const camperEquipment = vehicleEquipments.filter((equip) => {
          const camperValue = camper[equip.key as keyof Camper];
          if (typeof equip.value === 'string') {
            return true;
          }
          if (typeof equip.value === 'boolean') {
            return camperValue === equip.value;
          }
          return false;
        });
        const visibleEquipment = camperEquipment.slice(0, 6);
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
                <div className={css.ratingAndLocation}>
                  <div className={css.ratingAndLocationWrapper}>
                    <svg
                      className={
                        camper.reviews.length > 0 ? css.starIconFilled : css.starIconNotFilled
                      }
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
              </div>
              <p className={css.description}>{camper.description.slice(0, 68)}...</p>
              <ul className={css.equipmentList}>
                {visibleEquipment.map((equip) => {
                  if (typeof equip.value === 'string') {
                    return (
                      <li className={css.equipmentItem} key={equip.key}>
                        <svg className={css.equipmentIcon} width="20" height="20">
                          <use href={`/icons.svg#${equip.icon}`}></use>
                        </svg>
                        <span className={css.equipmentText}>
                          {camper[equip.key as keyof Camper] as string}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li className={css.equipmentItem} key={equip.key}>
                      <svg className={css.equipmentIcon} width="20" height="20">
                        <use href={`/icons.svg#${equip.icon}`}></use>
                      </svg>
                      <span className={css.equipmentText}>{equip.label}</span>
                    </li>
                  );
                })}
              </ul>
              <Link className={css.button} href={`/catalog/${camper.id}`}>
                Show more
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
