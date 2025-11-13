import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../src/ChangePassword.css' 
import axios from 'axios'  

const ChangePassword = () => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')


  const url = "https://instagram-user-identity.onrender.com"
  const submitHandler = async(data) => {
    
    try {
      const response = await axios.post(`${url}/auth/user`,data)
      console.log("sent sucessfully");
      setError(response.data.message);
      
      
      
    } catch (error) {
      if(error.response){
        setError(error.response.data.message);
      }
      else{
        console.log(error.message);
        
      }
      
      
    }

  }

  return (
    <div className="change-pass-container">
      <div className="change-pass-box">
        <h2 className="title">Instagram</h2>
        <h1 className="main-title">Change password</h1>
        <p className="info-text">
          Your password must be at least 6 characters and should include a combination of numbers,
          letters and special characters (!$@%).
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="change-pass-form">
          <input
            type="text"
            {...register('username')}
            placeholder="Enter Username" required
          />

          <input
            type="Password"
            {...register('current_password')}
            placeholder="Enter your current password" required
          />
          <input
            type="Password"
            {...register('New_password')}
            placeholder="Enter your New password" required
          />

          

          <label className="checkbox-label">
            <input type="checkbox" required/> Log out of other devices. Choose this if someone else used your account.
          </label>

          <button type="submit">Next</button>
        </form>
        <h6 className='error'>{error}</h6>
      </div>
    </div>
  )
}

export default ChangePassword