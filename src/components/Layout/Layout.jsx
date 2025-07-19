import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children, description, title, keywords, author }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      {/* <Navbar/> */}
      
      {children}
      {/* <Footer/> */}
    </>
  )
}

export default Layout