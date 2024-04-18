
import './App.css'
import AdminReg from './Componet/AdminPrview/Register/AdminReg'
import { Route, Routes } from 'react-router-dom'
import Login from './Componet/AdminPrview/Register/Login'
import StudentReg from './Componet/AdminPrview/Register/StudentReg'
import Header from './Componet/Header/Header'
import HomeDash from './Componet/Dashboard/HomeDash'
import Laayout from './Componet/Header/Layout/Laayout'

function App() {


  return (

    <>
    <div>
      <Routes>
        <Route path='/' element={<AdminReg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student-reg' element={<StudentReg />} />
        <Route path='/header' element={<Header />} />
        <Route path='/homedash' element={<Laayout>
          <HomeDash /></Laayout>} />
      </Routes>
    </div>

      
    </>
  )
}

export default App
