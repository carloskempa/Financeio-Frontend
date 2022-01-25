import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './router'
import { AppProvider } from './hooks'

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}