import React, { Component, lazy, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/buker-logo.svg"
import "./AdminLogin.css";
function AdminLogin() {
    const [otp, setOTP] = useState(['', '', '', '']); // Initialize with four empty strings
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [error,setError]=useState(false)
    const handleChange = (e, index) => {

        const newValue = e.target.value;
        if (newValue === "") {
            const newOTP = [...otp];
            newOTP[index] = newValue;
            setOTP(newOTP);
        }

        if (/^[0-9]$/.test(newValue) && index >= 0 && index < 4) {
            const newOTP = [...otp];
            newOTP[index] = newValue;
            setOTP(newOTP);

            // Focus on the next input field
            if (index < 3 && newValue !== '') {
                inputRefs[index + 1].current.focus();
            }
        }
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
        if(otp.every(item=>item==1)){
            console.log("login now")
            localStorage.setItem("adminlogin",true)
            window.location.href="/"
        }else{
            console.log("wrong otp")
            setError(true)
        }
    }

    return (
        <div className="row admin-container">
            <div className="col-md-6 left-side">
                <div className="form-left">
                    <img src={logo} class="img-fluid mr-2" alt="geo" width="183.81px"></img>
                    <h1 className='login-title'>BUYKAR</h1>
                </div>
            </div>
            <div className="col-md-6">
                <div className='form-right'>
                    <div className='login-form'>
                        <form className='form' onSubmit={HandleSubmit}>
                            <div className="login-form-item">
                                <div className="login-form-input-label outerbox">
                                    <label className="login-form-label">Mobile</label>
                                    <div className="innerbox">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.54688 14.25 1.75 11.4531 1.75 8C1.75 4.54688 4.54688 1.75 8 1.75C11.4531 1.75 14.25 4.54688 14.25 8C14.25 11.4531 11.4531 14.25 8 14.25ZM11.1812 6.05625L9.2375 8L11.1812 9.94375C11.3281 10.0906 11.3281 10.3281 11.1812 10.475L10.475 11.1812C10.3281 11.3281 10.0906 11.3281 9.94375 11.1812L8 9.2375L6.05625 11.1812C5.90938 11.3281 5.67188 11.3281 5.525 11.1812L4.81875 10.475C4.67188 10.3281 4.67188 10.0906 4.81875 9.94375L6.7625 8L4.81875 6.05625C4.67188 5.90938 4.67188 5.67188 4.81875 5.525L5.525 4.81875C5.67188 4.67188 5.90938 4.67188 6.05625 4.81875L8 6.7625L9.94375 4.81875C10.0906 4.67188 10.3281 4.67188 10.475 4.81875L11.1812 5.525C11.3281 5.67188 11.3281 5.90938 11.1812 6.05625Z" fill="#697386" />
                                        </svg>

                                    </div>
                                    <input
                                        type='text'
                                        className="login-form-input"
                                        autoFocus
                                    />
                                    <span style={{ color: "red" }}>
                                    </span>
                                </div>

                            </div>
                            <div className="resend-container" >
                                <div class="input-field" >
                                    {otp.map((value, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={value}
                                            onChange={(e) => handleChange(e, index)}
                                            ref={inputRefs[index]}
                                            maxLength="1"
                                        />
                                    ))}


                                </div>
                                <div className="resend-inner">
                                    <p className="resend-text">RESeND OTP again in 0:30S</p>
                                    <p className="resend">resend otp</p>

                                </div>
                                
                            </div>
                            <div className='login-btn-container'>
                                <button
                                    className="login-btn"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <p className="error resend">{error&&"Wrong Otp Plz type Correct"}</p>



                        </form>
                    </div>
                    <div className='d-block d-md-none text-center mt-2'>
                        <h6>Already have an account ?</h6>
                        <Link to='/login'>Login now </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdminLogin;
