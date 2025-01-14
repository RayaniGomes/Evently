import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    background: url('/ondas.svg') no-repeat center center / cover;

    .indices {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
        justify-content: center;
        gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(80px, 150px));
        }
    }

    .colaboradores {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        padding-top: 7rem;

        @media (max-width: 1024px) {
            padding-top: 5rem;
        }

        @media (max-width: 768px) {
            padding-top: 3rem;
        }
    }

    .logos {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5rem;

        img {
            object-fit: contain;
            mix-blend-mode: multiply;
        }

        @media (max-width: 1024px) {
            width: 100%;
            gap: 3rem;

            img {
                width: 25%;
                height: 25%;
            }
        }

        @media (max-width: 768px) {
            img {
                width: 150px;
                height: 40px;
            }
        }

    }
`