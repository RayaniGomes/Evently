import { Checkbox } from "./styled";

interface CheckboxProps {
    id: string;
    htmlFor: string;
    label: string;
    onClick: () => void;
}

export default function InputCheckbox({ id, htmlFor, label, onClick }: CheckboxProps) {
    return (
        <Checkbox>
            <input type="checkbox" id={id} onClick={onClick}/>
            <label htmlFor={htmlFor}>{label}</label>
        </Checkbox>
    );
}