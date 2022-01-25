import styled from "styled-components"

export const Container = styled.div`
  background: #ffff;
  padding: 1rem;
  border-radius: 0.25%;

 .header-table {

  display: flex;
  justify-content: space-between;
   
   strong {
     font-size: 0.80rem;
     font-weight: 500;
     color: var(--text-body);
     display: block;
     margin: 0.5rem 0 1rem 0;
     text-align: start;
    }
  }
`

export const Table = styled.table`

      width: 100%;
      border-spacing: 0 0.5rem;
      

      th {
         color: var(--text-body);
         font-weight: 400;
         padding: 1rem;
         text-align: left;
         line-height: 1.5rem;

         &.icon {
            text-align: center;
            width: 1rem;
          }

        &.center {
            text-align: center;
        }
      }

      td {
          padding: 1rem;
          border: 0;
          background: #f7f7f7;
          color: var(--text-body);
          border-radius: 0.25rem;

          &.entrada {
              color: var(--green);
          }

          &.saida{
            color: var(--red);
          }

          &.icon {
            text-align: center;

            button {
              border: 0;
              background: transparent;
              margin: 0;

              svg {
                font-size: 1.3rem;
                color: var(--text-body)
              }

            }

          }

          &.center {
            text-align: center;
          }
      }
`