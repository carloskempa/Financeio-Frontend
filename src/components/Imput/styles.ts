import styled, { css } from "styled-components";

interface ContainerProps {
    isErrored: boolean;
}

export const InputText = styled.input<ContainerProps>`

   width: 100%;
   padding: 0 1.5rem;
   height: 2.8rem;
   border-radius: 0.25rem;
   border: 2px solid #d7d7d7;
   background: #e7e9ee;
   font-weight: 400;
   font-size: 1rem;
   
   &::placeholder{
       color: var(--text-body)
   }
   
   & + input {
      margin-top: 1rem;
   }

   ${(props) => props.isErrored && css`border-color: var(--red);`}

`
export const Container = styled.div`

   span.erro {
      color: var(--red);
    }

`