import styled from "styled-components";

export const Section = styled.section`
    width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--gradiente-radial);
    color: var(--branco);
    padding: 1rem;
    border-radius: 10px;
    gap: 2rem;

    form {
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
                    border: 1px solid var(--branco);
                    opacity: 1;
                    margin: 0;
                    border-radius: 1px;
                }
            }

            input[type="date"] {
                width: 100%;
                height: 30px;
                border: none;
                border-radius: 10px;
                padding: .5rem;
                font-size: 12px;
            }

            input [type="checkbox"] {
                width: 20px;
                height: 20px;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`