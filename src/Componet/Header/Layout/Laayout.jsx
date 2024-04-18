import React, { Children } from 'react'
// import Header from '../Header/Header'
import Header from '../Header'

const Laayout = ({Children}) => {
  return (
    <div>
        <Header />
        <div style={{minHeight: "80vh'"}}>{Children}</div>
    </div>
  )
}

export default Laayout