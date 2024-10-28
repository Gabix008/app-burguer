import { useState } from 'react'
import RoutesApp from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Modal, StyledEngineProvider } from '@mui/material'


function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <StyledEngineProvider injectFirst>
        
      </StyledEngineProvider>
        <RoutesApp/>
    
    </>
  )
}

export default App
