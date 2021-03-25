import { useResas } from '../contexts/Resas';
import type { PrefMap, PrefName } from '../interfaces/resas';

import LabeledCheckbox from './LabeledCheckbox';

import styles from './PrefectureCheckboxes.module.scss';

const generateCheckboxes = (
  prefMap: PrefMap,
  handlePrefClick: (prefName: PrefName) => void
) =>
  Array.from(prefMap.keys()).map((prefName) => (
    <LabeledCheckbox
      key={prefName}
      label={prefName}
      checked={prefMap.get(prefName).selected}
      handleClick={handlePrefClick}
    />
  ));

const PrefectureCheckboxes = () => {
  const { prefectures, handlePrefClick } = useResas();

  return (
    <div>
      <p>都道府県</p>
      <div className={styles['grid-container']}>
        {generateCheckboxes(prefectures, handlePrefClick)}
      </div>
    </div>
  );
};

export default PrefectureCheckboxes;
