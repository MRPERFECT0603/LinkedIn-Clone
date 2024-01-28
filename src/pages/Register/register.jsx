import React, { useState } from 'react';
import "./register.scss";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../../features/userSlice";
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../config';
function Register() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const footerItem = (item) => (
        <div className="fitem">
            <span>{item}</span>
        </div>
    )
    const handleRegister = (e) => {
        console.log(email , password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            // dispatch(login({
            //     email: userCredential.user.email,
            //     uid: userCredential.user.uid,
            // }))
            const user = userCredential.user;
            localStorage.setItem('token',user.accessToken);
            localStorage.setItem('user',JSON.stringify(user));

            < Navigate to= '/' />
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });

        

    }

    return (
        <div className='register'>
            <div className="titleBar">
                <span className='Linked'>Linked</span>
                <img className="In" src="./linkedin.png" alt="" />
            </div>
            <div className="registerBody">
                <div className="tagline">
                    <h3>Make the most of your professional life</h3>
                </div>
                <div className="registerForm">
                    <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                        <p>Email or phone number</p>
                        <input onChange={e => setEmail(e.target.value)}
                        type='email'></input>
                        <p>Password (6+ characters)</p>
                        <input onChange={e => setPassword(e.target.value)}
                        type='password'></input>
                        <p className='agreement'>By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>, <span>Privacy Policy</span>, and <span>Cookie Policy</span>.</p>
                        <div className="registerButton">
                            <button type='submit'>Agree & Join</button>
                        </div>
                    </form>
                    <div className="signIn">
                        <p>Already on LinkedIn?<Link to="/login"><span>  Sign in</span></Link> </p>
                    </div>
                </div>
            </div>
            <div className="footerMenu">
                <div className="leftf">
                    <span className='Linkedf'>Linked</span>
                    <img className="Inf" src="./linkedin.png" alt="" />
                    <span><CopyrightRoundedIcon  className="copyright"/> 2023</span>
                </div>
                {footerItem('About')}
                {footerItem('Accessibility')}
                {footerItem('User Agreement')}
                {footerItem('Privacy Policy')}
                {footerItem('Cookie Policy')}
                {footerItem('Copyright Policy')}
                {footerItem('Brand Policy')}
                {footerItem('Guest Controls')}
                {footerItem('Community Guidelines')}
                {footerItem('Language')}
            </div>
        </div>
    )
}

export default Register;