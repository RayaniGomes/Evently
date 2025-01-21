import styled from "styled-components";

interface borderProps {
    $color: string
}

export const Checkbox = styled.div<borderProps>`
    input {
        display: none;
    }

    input + label::before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: 1px solid var(${(props) => props.$color});
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
        margin-bottom: 3px;
    }

    input:checked + label::before {
        background: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%230B233B' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-color: var(${props => props.$color});
        background-position: center;
        border: none;
        padding: 1px;
    }

    @media (max-width: 768px) {
        input + label::before {
            width: 12px;
            height: 12px;
            margin-right: 5px;
        }
    }
`