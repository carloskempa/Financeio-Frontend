import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  margin: 1rem 0;
  padding: 2rem;
  
  h3 {
     margin-bottom: 1rem;
  }

`

export const Content = styled.div`
  display:  flex;
  flex-direction: column;

 .linha {
   display: flex;
   margin: 1rem 0;
 }

button {
     padding: 0 0.8rem;
     height: 3rem;
     background: #e7e9ee;
     color: #363636;
     border-radius: 0.25rem;
     border: 0;
     font-size: 0.8rem;
     transition: filter 0.2s;
     font-weight: 500;
     margin: 0;
     margin-right: 0.3rem;

     &.active {
        background: #363636;
        color: #fff;
     }
    
     &:hover{
         filter: brightness(0.9);
     }
}

select {
    padding: 0 0.8rem;
    height: 3.2rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    min-width: 10rem;
}


 & .select-month {
     margin-left: 0.75rem;
 }

 

`