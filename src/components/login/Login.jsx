import React, { useState } from 'react'
import './login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../lib/upload';
function Login() {
    const [isLoading, setLoading] = useState(false);
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const imgUrl = await upload(avatar.file);
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: []
            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            })
            toast.success("Account created successfully")

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }

    }
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });
    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className='login'>
            <div className="item">
                <h2>welcome back</h2>
                <form onSubmit={handleLogin} >
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button disabled={isLoading}>{isLoading ? "Loading" : "Sign In"}</button>
                </form>
            </div>
            <div className='separator'></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>

                    <input type="file" id='file' onChange={handleAvatar} />
                    <input type="text" placeholder='Useranme' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />

                    <button disabled={isLoading}>{isLoading ? "Loading" : "Sign Up"}</button>
                </form>
            </div>
            <div className="item"></div>
        </div >
    )
}

export default Login