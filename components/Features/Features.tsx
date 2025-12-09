import { Camper } from '@/types/camper';
import EquipmentList from '../EquipmentList/EquipmentList';
import css from './Features.module.css';
import { vehicleFeatures } from '@/constants/featuresConfig';

interface FeaturesProps {
  camper: Camper;
}

export default function Features({ camper }: FeaturesProps) {
  return (
    <div className={css.featuresWrapper}>
      <EquipmentList camper={camper} showEquip={11} />
      <div className={css.features}>
        <h2 className={css.featuresTitle}>Vehicle details</h2>
        <ul className={css.featuresList}>
          {vehicleFeatures.map((feature) => (
            <li className={css.featuresItem} key={feature}>
              <span className={css.featureKey}>{feature}</span>
              <span className={css.featureValue}>
                {String(camper[feature as keyof Camper])
                  .replace(/([A-Z])/g, ' $1')
                  .toLowerCase()
                  .replace(/^./, (str: string) => str.toUpperCase())}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
