import Image from 'next/image';
import { Camper } from '@/types/camper';
import css from './CamperList.module.css';
import { vehicleEquipments } from '@/constants/filtersConfig';
import Link from 'next/link';

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li className={css.item} key={camper.id}>
          <Image
            className={css.image}
            src={camper.gallery[0].thumb}
            alt={camper.name}
            width={292}
            height={320}
          />
          <div className={css.info}>
            <div className={css.NameAndPrice}>
              <h2 className={css.name}>{camper.name}</h2>
              <p className={css.price}>{camper.price.toFixed(2)}</p>
              <svg className={css.heartIcon} width="26" height="24">
                <use href="/icons.svg#heart"></use>
              </svg>
            </div>
            <div className={css.ratingAndLocation}>
              <div className={css.ratingWrapper}>
                <svg
                  className={camper.reviews.length > 0 ? css.starIconFilled : css.starIconNotFilled}
                  width="16"
                  height="16"
                >
                  <use href="/icons.svg#star"></use>
                </svg>
                <p
                  className={css.reviews}
                >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
              </div>
              <div className={css.locationWrapper}>
                <svg className={css.mapIcon} width="16" height="16">
                  <use href="/icons.svg#map"></use>
                </svg>
                <p className={css.location}>{camper.location}</p>
              </div>
            </div>
            <p className={css.description}>{camper.description}</p>
            <ul>
              {vehicleEquipments.map((equip) => (
                <li key={equip.key}>
                  {/* { if (equip.value == 'transmission' && camper.transmission === 'Automatic') {return 'lol'}} */}
                </li>
              ))}
            </ul>
            <Link href={`/catalog/${camper.id}`}>Show more</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
