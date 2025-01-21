import { Checkbox } from "./styled";

interface CheckboxProps {
    id: string;
    htmlFor: string;
    label: string;
    color: string;
    onClick: () => void;
}

export default function InputCheckbox({ id, htmlFor, label, onClick, color }: CheckboxProps) {
    return (
        <Checkbox $color={color}   >
            <input type="checkbox" id={id} onClick={onClick} />
            <label htmlFor={htmlFor}>{label}</label>
        </Checkbox>
    );
}