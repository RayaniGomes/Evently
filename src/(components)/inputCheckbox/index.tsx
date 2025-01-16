import { Checkbox } from "./styled";

interface CheckboxProps {
    id: string;
    htmlFor: string;
    label: string;
}

export default function InputCheckbox({ id, htmlFor, label }: CheckboxProps) {
    return (
        <Checkbox>
            <input type="checkbox" id={id} />
            <label htmlFor={htmlFor}>{label}</label>
        </Checkbox>
    );
}