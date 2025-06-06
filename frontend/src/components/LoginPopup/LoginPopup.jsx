import React  from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setcurrState]= useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required  />
        </div>
        <button>
          {currState==="Sign Up"?"Create account":"Login"}
        </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              I agree to the terms and conditions
            </p>
          </div>
          {currState==="Login"
          ?<p>Create a new account  <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>:
          <p>Already have a account <span onClick={()=>setcurrState("Login")}>Login here</span> </p>}
      </form>
      
    </div>
  )
}

export default LoginPopup