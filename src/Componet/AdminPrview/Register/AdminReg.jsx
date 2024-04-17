// import React from 'react'
import "./Register.css"

const AdminReg = () => {
  return (
    <div className="container from_ --100vh">
        <div className="from-container">
            <p className="title">create an account</p>
            <from className="from">
                <div className="--dir-column">
                    <label htmlFor="name">Full name:</label>
                    <input 
                    type="name"
                    className="input"
                    placeholder="Enter your name"
                    required
                    />

                </div>
                <div className="--dir-column">
                    <label htmlFor="name">Email:</label>
                    <input 
                    type="email"
                    className="input"
                    placeholder="example@gmail.com"
                    required
                    />

                </div>
                 <div className="--dir-column">
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password"
                    className="input"
                    placeholder="Enter your password"
                    required
                    />

                </div>
                <div className="--dir-column">
                    <label htmlFor="password">Confirm Password:</label>
                    <input 
                    type="password"
                    className="input"
                    placeholder="confirm your password"
                    required
                    />

                </div>

            <button className="--btn">create account</button>
            </from>
        </div>
    </div>
  )
}

export default AdminReg