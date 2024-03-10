import React from "react";
import './LoginForm3D.css';
import InputField from "../InputField/InputField";
import Button from '../Button/Button';
import CrossButton from '../CrossButton/CrossButton';
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const RegisterClick = () => {
    const wrapper = document.querySelector('.log-reg-tab');
    const registerTab = document.querySelector('.register-form');
    registerTab.classList.add('active');
    wrapper.classList.add('active')
}

const LoginClick = () => {
    const registerTab = document.querySelector('.register-form.active');
    const wrapper = document.querySelector('.log-reg-tab.active');
    registerTab.classList.remove('active');
    wrapper.classList.remove('active');
}

const CloseBtnClick = () => {
    const login = document.querySelector('.login-register-pannel');
    const wrapper = document.querySelector('.mainwrapper');
    const login_grid = document.querySelector('.log-reg-grid');
    
    login.classList.remove('active');
    wrapper.classList.remove('active');
    login_grid.classList.remove('active');
    
} 


const LoginForm3D = () => {
    return (
        <div className='log-reg-grid'>
            <div className='log-reg-container'>
                <div className='log-reg-tab'>

                    <div className='log-tab-content'>

                        <div className='log-tab-grid'>
                            <div className='close-btn-container' onClick={CloseBtnClick}>
                                <CrossButton />
                            </div>
                            <div className='log-wrapper'>
                                <form className="login-form">
                                    <div className="login-form-title">
                                        <h2>Login</h2>
                                    </div>
                                    <div className="login-input-box1">
                                        <InputField type='text' label='Username' />
                                        <FaUser className="icon-box1" />
                                    </div>
                                    <div className="login-input-box2">
                                        <InputField type='password' label='Password' />
                                        <RiLockPasswordFill className="icon-box2"/>
                                    </div>
                                    <div className="login-remember">
                                        <label><input type="checkbox"/>Remember me</label>
                                    </div>
                                    <div className="login-forgot">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="login-button">
                                        <Button title="Login" />
                                    </div>
                                    <div className="register-link" onClick={RegisterClick}>
                                        <p>Don't have an account? <a href="#">Register</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className='reg-tab-content'>

                        <div className='reg-tab-grid'>
                            <div className='close-btn-container' onClick={CloseBtnClick}>
                                <CrossButton />
                            </div>
                            <div className='reg-wrapper'>
                                <form className="register-form">
                                    <div className="register-form-title">
                                        <h2>Registration</h2>
                                    </div>
                                    <div className="register-input-box1">
                                        <InputField type='text' label='Username' />
                                        <FaUser className="register-icon-box1" />
                                    </div>
                                    <div className="register-input-box2">
                                        <InputField type='email' label='Email' />
                                        <MdEmail className="register-icon-box2" />
                                    </div>
                                    <div className="register-input-box3">
                                        <InputField type='password' label='Password' />
                                        <RiLockPasswordFill className="register-icon-box3"/>
                                    </div>
                                    <div className="register-agreement">
                                        <label><input type="checkbox"/>I agree to the terms & conditions</label>
                                    </div>
                                    <div className="register-button">
                                        <Button title="Register" />
                                    </div>
                                    <div className="login-link" onClick={LoginClick}>
                                        <p>Already have an account? <a href="#">Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default LoginForm3D;