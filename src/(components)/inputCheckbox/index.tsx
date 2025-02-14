import { CheckboxProps } from "@/interfaces";
import { Checkbox } from "./styled";

export default function InputCheckbox({
  id,
  htmlFor,
  label,
  onChange,
  color,
}: CheckboxProps) {
  return (
    <Checkbox $color={color}>
      <input type="checkbox" id={id} onChange={onChange}/>
      <label htmlFor={htmlFor}>{label}</label>
    </Checkbox>
  );
}
