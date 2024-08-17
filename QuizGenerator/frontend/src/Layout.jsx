import React from 'react'
import Header from './components/pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer/Footer'
import { ContextProvider } from './context/GlobalContext'

const Layout = () => {
  return (
    <>
   <ContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </ContextProvider>
   




    </>
  )
}

export default Layout