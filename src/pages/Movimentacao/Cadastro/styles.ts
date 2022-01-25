import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
   width: 100%;
   background: #fff;
   padding: 2rem;

   h2 {
     border-bottom: 2px solid #ddd;
     margin-bottom: 1rem;
   }

`

export const LinhaCol4 = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 1rem;

   .pagador {
       display: flex;
       justify-content: space-between;
   }

`

export const LinhaCol1 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1rem;
`

export const TransactionTypeContainer = styled.div`
 margin: 1rem 0;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1rem;
 margin-top: 0.2rem;
`


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red'
}

const colors = {
    green: "#33CC95",
    red: "#E52E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
    margin: 0;

    &:hover {
       border-color: ${darken(0.1, '#d7d7d7')};
    }
   
    img {
       width: 20px;
       height: 20px;
    }
   
    span {
       display: inline-block;
       margin-left: 1rem;
       font-size: 1rem;
       color: var(--text-title);
    }

`
export const ContainerButton = styled.div`
   margin: 3rem 0 0;
   display: flex;
   justify-content: end;

   button {
       margin: 0;

       & {
           margin-left: 1rem;
       }
   }

`