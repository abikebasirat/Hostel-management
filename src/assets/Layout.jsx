import React from 'react'
 import Header from '../Componet/Header/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <div style={{minHeight: "80vh'"}}>{children}</div>
    </div>
  )
}

export default Layout