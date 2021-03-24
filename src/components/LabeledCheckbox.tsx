type Props = {
  label: string;
  checked: boolean;
  handleClick: () => void;
};

const LabeledCheckbox = ({ label, checked, handleClick }: Props) => {
  const checkboxId = `${label}-input-cb`;
  return (
    <div>
      <input id={checkboxId} type="checkbox" onClick={handleClick}></input>
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default LabeledCheckbox;
