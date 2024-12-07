import React, { useState } from 'react'
import './login.css';
import { toast } from 'react-toastify';
function Login() {
    const handleLogin = e => {
        e.preventDefault();
        toast.warn("hello");
        // alert('hello');
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
    return (
        <div className='login'>
            <div className="item">
                <h2>welcome back</h2>
                <form onSubmit={handleLogin} >
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className='separator'></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form >
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>

                    <input type="file" id='file' onChange={handleAvatar} />
                    <input type="text" placeholder='Useranme' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />

                    <button>Sign Up</button>
                </form>
            </div>
            <div className="item"></div>
        </div >
    )
}

export default Login