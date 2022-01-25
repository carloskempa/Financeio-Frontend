import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #ffffff;
    --green: #33cc95;
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

html{
    @media (max-width: 1080px){
        font-size: 93.73%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}


body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
}

body, input, textarea, button, select {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

 button {
    cursor: pointer;
    border: 0;
    height: 2.8rem;
    border-radius: 0.25rem;
    padding: 0 2rem;
    margin: 0 1rem;
    font-weight: 500;
    font-size: 1rem;
    transition: filter 0.2s;
   &.sucesso {
       background-color: var(--green);
       color: var(--shape)
   }

   &:hover{
         filter: brightness(0.9);
    }

    &.secundario {
        background-color: #6c757d;
        border-color: #6c757d;
        color: var(--shape)
    }

 }

 [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
 }


select {
     padding: 0 1.5rem;
     height: 2.8rem;
     border-radius: 0.25rem;
     border: 1px solid #d7d7d7;
     background: #e7e9ee;
     font-weight: 400;
     font-size: 1rem;
     width: 100%;
}

select.errors {
    border: 2px solid var(--red)
}

.react-modal-overlay {
    background: rgb(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
 }

 .react-modal-content {
   width: 100%;
   max-width: 800px;
   background: var(--background);
   position: relative;
   border-radius: 0.25rem;


   .react-modal-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 1rem 2rem;

      h2 {
        color: var(--text-title);
        font-size: 1.2rem;
      }

      button.react-modal-close {
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        height: 1.5rem;
        margin: 0;
        padding: 0;

        &:hover {
            filter: brightness(0.8);
         }
      }
   }

   .react-modal-body {
       padding: 1rem 2rem;
       min-height: 15rem;
   }
   
   .react-modal-footer {
      padding: 2rem;
      border-top: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: flex-end;

     
      & button {
         margin: 0;
         margin-left: 0.70rem;

         & svg {
             padding-top: 5px;
         }
      }

   }


 }

label {display: block}


input[type="text"], input[type="date"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.8rem;
    border-radius: 0.25rem;
    border: 2px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 2px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
  }

  .colorError { 
    color: var(--red);
  }

`