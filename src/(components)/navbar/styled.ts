import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.375rem;
    padding: 1rem 2rem;
    background-color: var(--azul-medio);
`

export const Form = styled.form`    
    display: flex;                
    align-items: center;                            
    margin-left: auto;
    background-color: var(--branco);
    border-radius: .625rem;
    padding: 0.25rem 0.5rem;

    input {
        border: none;
        color: var(--azul-escuro);
        background-color: transparent;
    }

    button {
        border: none;
        background-color: transparent;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;

    a {
        color: var(--branco);
        text-decoration: none;
        position: relative;

        &:hover::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 2px;
            left: 0;
            background-color: var(--branco);
        }

        
        &.active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 2px;
            left: 0;
            background-color: var(--branco);
        }
    }
`