import { darken, transparentize } from "polished";
import styled from "styled-components";



export const Content = styled.form`

    h2{
        color: var(--titulos);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding:  0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        
        border: 1px solid #d7e7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--textos);
        }

        & + input {
            margin-top: 1rem;
        }

        

    }

    button.submit-btn{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
    }

    
    
`


export const TransacitonTypeContianer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

   



`
type RadialButtonProps = {
    isActive: boolean;
    activeColor: string;
}

export const RadialButton = styled.button<RadialButtonProps>`

    
        height: 4rem;
        border: 1px solid #d7e7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive ?  transparentize(0.9,props.activeColor) : "transparent"};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;


        &:hover{
            border-color: ${darken(0.2,"#d7e7d7" )};
        }

        img{
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color:  var(--titulos);
        }
    
`