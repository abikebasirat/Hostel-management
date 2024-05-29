import React from 'react'
import Sidebar from '../Sidebar'
import './Dashboard.css'
import { useState } from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import { Link } from 'react-router-dom'


const studentsData = [
  {
  id: 1,
  name: "Jessicsa Smith",
  email: 'Jessica.smith@gmail.com',
  idNumber: "12345",
  gender: "Female",
  age: 20,
  nationality: "America"
},
  {
  id: 2,
  name: "Jessicsa Smith",
  email: 'Jessica.smith@gmail.com',
  idNumber: "12345",
  gender: "Female",
  age: 21,
  nationality: "British"
},
  {
  id: 3,
  name: "Jessicsa Smith",
  email: 'Jessica.smith@gmail.com',
  idNumber: "12345",
  gender: "Female",
  age: 22,
  nationality: "Spanish"
}
]

const StudentDashboard = () => {
const [searchTerm, setSearchTerm] = useState('')
const [students, setStudents] = useState(studentsData)
const [filteredData, setFilteredData] = useState(studentsData);

const handleSearchChange = (e) => {
  const term = e.target.value.toLowerCase()
  setSearchTerm(term)
  const filtered = studentsData.filter(
    (student) =>
    student.name.toLowerCase().includes(term) ||
    student.email.toLowerCase().includes(term)
  );
  setFilteredData(filtered)
}

const handleDelete = (studentId) => {
  const updatedStudents = students.filter(
    (student) => student.id !==studentId
  );
  setStudents(updatedStudents);
  const updatedFilteredData = filteredData.filter(
    (student) => student.id !==studentId
  )
  setFilteredData(updatedFilteredData);

}
  return (
    
    <div className='container --flex-start'>
        <Sidebar /> 
      <div className='rigth'>
        <p>students</p>
        <p>Search students</p>
      
      

      <input placeholder='Search by name, email, or ID number'
      type='text'
      className='search'
      onClick={handleSearchChange}/>

      <div className='table'>
        <table className='table_wrapper'>
          <thead className='table__head'>
            <tr className='table__row'>
              <th className='same_class'>Student Name</th>
              <th className='same_class'>Email</th>
              <th className='same_class'>ID number</th>
              <th className='same_class'>Gender</th>
              <th className='same_class'>Age</th>
              <th className='same_class'>Nationality</th>
              <th className='same_class'>Actions</th>

            </tr>
          </thead>
          <tbody className='table__body'>
            {filteredData.map((student, index) =>(
              <tr key={index} className='table__row'>
                <td className='same_class'>{student.name}</td>
                <td className='same_class'>{student.email}</td>
                <td className='same_class'>{student.idNumber}</td>
                <td className='same_class'>{student.gender}</td>
                <td className='same_class'>{student.age}</td>
                <td className='same_class'>{student.nationality}</td>
                <td className='same_class'>
                  <RiDeleteBin6Line
                  size={25}
                  color='red'
                  onClick={() => handleDelete(student.id)}
                  />
                </td>
              </tr>
          ))}
          </tbody>
          
        </table>
      </div>
      <button className='btn-secondry'>
        <Link to="/student-reg">Add a student</Link>
      </button>
    </div>
    </div>
  )
}

export default StudentDashboard