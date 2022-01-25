import styled from "styled-components";

export const Container =styled.div`

    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;

    ul {
       list-style: none;
       display: flex;


       button {
         margin: 0;
         margin-left: 0.75rem;
         padding: 0 1rem;
         font-size: 0.80rem;
         background: #e7e9ee;

         &.active {
            background: #363636;
            color: #fff;
         }

       }

    }
`
