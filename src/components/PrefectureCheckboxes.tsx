import { useResas } from '../contexts/Resas';
import type { PrefMap, PrefName } from '../interfaces/resas';

import LabeledCheckbox from './LabeledCheckbox';

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
      <p>Prefecture Checkboxes</p>
      {generateCheckboxes(prefectures, handlePrefClick)}
    </div>
  );
};

export default PrefectureCheckboxes;
