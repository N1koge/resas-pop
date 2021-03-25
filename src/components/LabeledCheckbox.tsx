type Props = {
  label: string;
  checked: boolean;
  handleClick: (label: String) => void;
};

const LabeledCheckbox = ({ label, checked, handleClick }: Props) => {
  const checkboxId = `${label}-input-cb`;
  return (
    <div>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked || false}
        readOnly
        onClick={() => {
          handleClick(label);
        }}
      ></input>
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default LabeledCheckbox;
