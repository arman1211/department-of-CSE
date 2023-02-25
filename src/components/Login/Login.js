import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className='form-container'>
                <input className='email' type="email" required placeholder='Enter Your Email'></input>
                <br/>

                <input className='password' type="password" required placeholder='Enter Your Password'></input>
                <br/>
                <input className='submit' type='submit'></input>
            </form>
            <div className='button-container'>
                <p>---------------OR---------------</p>
                <button className='google'>G</button>
                <button className='google'>f</button>
                <button className='google'>git</button>
            </div>

        </div>
    );
};

export default Login;