import React, { useState } from 'react';
import "./login.scss";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../../features/userSlice";
import { useDispatch } from 'react-redux';
import { auth } from '../../config';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const footerItem = (item) => (
        <div className="fitem">
            <span>{item}</span>
        </div>
    )
    const handleLogin = (e) => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                localStorage.setItem('token', user.accessToken);
                localStorage.setItem('user', JSON.stringify(user));

                navigate('/home');
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

    }

    return (
        <div className='login'>
            <div className="titleBar">
                <span className='Linked'>Linked</span>
                <img className="In" src="./linkedin.png" alt="" />
            </div>
            <div className="loginBody">
                <div className="tagline">
                    <h2>Sign in</h2>
                    <h3>Stay updated on your professional world</h3>
                </div>
                <div className="loginForm">
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <input onChange={e => setEmail(e.target.value)}
                            type='email' placeholder='Email or Phone'></input>
                        <input onChange={e => setPassword(e.target.value)}
                            type='password' placeholder='Password'></input>
                        <span>Forgot password?</span>
                        <div className="loginButton">
                            <button type='submit'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="Register">
                <p>New to LinkedIn?<Link to="/register"><span>Join now</span></Link> </p>
            </div>
            <div className="footerMenu">
                <div className="leftf">
                    <span className='Linkedf'>Linked</span>
                    <img className="Inf" src="./linkedin.png" alt="" />
                    <span><CopyrightRoundedIcon className="copyright" /> 2023</span>
                </div>
                {footerItem('User Agreement')}
                {footerItem('Privacy Policy')}
                {footerItem('Community Guidelines')}
                {footerItem('Cookie Policy')}
                {footerItem('Copyright Policy')}
                {footerItem('Send Feedback')}
                {footerItem('Language')}
            </div>
        </div>
    )
}

export default Login;