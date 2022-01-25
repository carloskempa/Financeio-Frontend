import styled from "styled-components";



export const Container = styled.nav`

 .menu {
       list-style: none;
       display: flex;
       align-items: center;
        
         li {
          position:relative;
          margin: 0 1rem;

           a {
              text-decoration: none;
              color: #fff;
              padding: 1.3rem 0;
            }

           ul {
              list-style: none;
              position: absolute;
              display: none;
              background: #fff;
              border-radius: 0.25rem;
              color: #000;
              text-align: end;
              width: 12rem;
              right: 0;
              margin-top: 1.25rem;
              box-shadow: 3px 4px 6px #4b4b4b;
              z-index: 1000;

              li {
                transition: background 0.2s;
                margin: 0;
                padding-right: 1.3rem;
                  &:hover{
                   background: #f4f4f4;
                  }
                  a {
                    color: var(--text-title);
                    padding: 0.4rem 0;
                    display: block;
                  }
              }
            }


          svg {
                color: #fff;
                font-size: 1rem;
                position: relative;
                top: 4px;
                left: 5px;
            }
        } 
    }
    
 .menu li:hover ul, .menu li:hover ul{display:block;}

`