import styled from "styled-components";

export const Forms = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item-form {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        label {
            font-size: 14px;
            font-weight: 500;

            hr {
                width: 100%;
                border: 1px solid var(--azul-escuro);
                opacity: 1;
                margin: 0;
                border-radius: 1px;
            }
        }

        input[type="date"] {
            width: 100%;
            height: 30px;
            border: none;
            border-bottom: 2px solid var(--azul-escuro);
            border-radius: 10px;
            padding: .5rem;
            font-size: 12px;
        }

        input [type="checkbox"] {
            width: 20px;
            height: 20px;
        }
    }

    
`