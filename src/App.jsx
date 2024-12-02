//App.jsx
import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import GlobalContext from './contexts/GlobalContext'
import FormProvider from './contexts/FormProvider'

function App() {
  const api_url_base = 'xxxx';

  return (
    <>
      <GlobalContext.Provider value={{api_url_base}}>
        <FormProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contacts' element={<ContactsPage/>}/>   
                <Route path='*' element ={<NotFoundPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </FormProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default App
