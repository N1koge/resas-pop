import LabeledCheckbox from './LabeledCheckbox';

const sampleLabels = ['a', 'b', 'c', 'd', 'e'];

const generateCheckboxes = (labels: string[], handleClick: () => void) =>
  labels.map((label) => (
    <LabeledCheckbox label={label} checked={true} handleClick={handleClick} />
  ));

const PrefectureCheckboxes = () => (
  <div>
    <p>Prefecture Checkboxes</p>
    {generateCheckboxes(sampleLabels, () => {})}
  </div>
);

export default PrefectureCheckboxes;
