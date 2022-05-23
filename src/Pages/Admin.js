import React,{useState} from 'react';
import '../Style/Admin.css'; 
import { auth } from '../Firebase-config'
import {
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth"

const Admin = () => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch(error){
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <div className="admin__page">
            <div className= "admin__cont" >
                <h2>Hello Guapa</h2>
                <button
                    className='signout__btn'
                    onClick={logout}
                >
                    Sign Out
                </button>
            </div>
            <div className={user ? "login__cont close" : "login__cont"}>
                <input 
                    type="email" 
                    className='login__email'
                    placeholder='Enter email' 
                    onChange={(e) =>{setLoginEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    className='login__password'
                    placeholder='Enter password' 
                    onChange={(e) =>{setLoginPassword(e.target.value)}}
                />
                <button
                    className='login__btn'
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>

    )
}

export default Admin