import styled from 'styled-components';

export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--blue);

`

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    max-width: 1120px;

    padding: 2rem 1rem 10rem;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }

`



