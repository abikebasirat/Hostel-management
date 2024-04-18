// import React from 'react'
// import Login from "./Login"
import './Register.css'


const StudentReg = () => {

    return (
        <div className='container form__ --100vh'>
         <div className='form-container'>
            <p className='title'>Student Registration.</p>
    
            <form className='form'>
                <div className='--dir-column'>
                    <label htmlFor="text">Student&apos;s name:</label>
                    <input 
                    type='text'
                    className='input'
                    name='name'
                    placeholder='Enter students name'
                    required /> 
                </div>
                <div className='--dir-column'>
                    <label htmlFor="contact-email">Student&apos;s Email:</label>
                    <input 
                    type='text'
                    className='input'
                    name='name'
                    placeholder='example@gmail.com'
                    required />
                </div>

                <div className='--dir-column'>
                    <label htmlFor="age">Age:</label>
                    <input 
                    type='text'
                    className='input'
                    name="age"
                    placeholder='20'
                    required />

                  

                <div className='--dir-column'>
                    <label htmlFor="room number">Room number:</label>
                    <input 
                    type='text'
                    className='input'
                    name="inpt"
                    placeholder='001'
                    required />
                </div>
                </div>
                <div className='--dir-column'>
                    <label htmlFor="contact-email">Guardian&apos;s Name:</label>
                    <input 
                    type='text'
                    className='input'
                    placeholder='Gurdians name'
                    required />
                </div>
                
                <div className='--dir-column'>
                    <label htmlFor="email">Guardian&apos;s Email:</label>
                    <input 
                    type='text'
                    className='input'
                    placeholder='example@gmail.com'
                    required />

                </div>
                    <button className='--btn'>Add student</button>
                
            </form>
         </div>
        </div>  
)

}
       

export default StudentReg