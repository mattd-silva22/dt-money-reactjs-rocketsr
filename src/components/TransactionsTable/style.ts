import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        


        td {
            padding: 1rem 2rem;
            border: 0;

            background-color: #fff;
            color: var(--textos);
            border-radius: 0.25rem;

            &:first-child {
                color: black;
            }
            &.deposit {
                color: var(--green);
            }
            &.withdrawal{
                color: var(--red) ;
            }

            

           
        }


    }

`
