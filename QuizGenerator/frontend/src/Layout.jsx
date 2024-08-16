import React from 'react'
import Header from './components/pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer/Footer'

const Layout = () => {
  return (
    <>
  
    <Header/>
    <Outlet/>
    <Footer/>




    </>
  )
}

export default Layout