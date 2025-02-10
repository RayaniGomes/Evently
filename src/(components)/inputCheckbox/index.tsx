import { Checkbox } from "./styled";

interface CheckboxProps {
  id: string;
  htmlFor: string;
  label: string;
  color: string;
  onChange: () => void;
}

export default function InputCheckbox({
  id,
  htmlFor,
  label,
  onChange,
  color,
}: CheckboxProps) {
  return (
    <Checkbox $color={color}>
      <input type="checkbox" id={id} onChange={onChange} {...register}/>
      <label htmlFor={htmlFor}>{label}</label>
    </Checkbox>
  );
}
