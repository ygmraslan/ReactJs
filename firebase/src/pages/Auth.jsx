import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom'

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user;
            if (user) {
                navigate("/")
            }
        }
        catch (error) {
            toast.error(error.message)

        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                navigate("/")
            }
        }
        catch (error) {
            toast.error("Could not login!", + error.message);

        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("User created!")
                setEmail('');
                setPassword('');
            }
        }
        catch (error) {
            toast.error(error.message);
        }

    }
    return (

        <div className='auth'>
            <h3 className='auth-header'>Login / Register </h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='example@example.com' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password...' />
            </div>
            <div>
                <button onClick={loginWithGoogle} className='google-button'> <FaGoogle style={{ marginTop: '2px', marginRight: '2px' }} /> Login with Google </button>
                <button onClick={login} className='login-button'>Login</button>
                <button onClick={register} className='register-button'>Register</button>
            </div>

        </div>
    )
}

export default Auth