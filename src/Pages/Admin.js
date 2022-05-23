import React from 'react';
import '../Style/Admin.css'; 

const Admin = () => {
    return (
        <div className="admin__page">
            <div className="admin__cont">
                <h2>Hello Guapa</h2>
                <button
                    className='signout__btn'
                >
                    Sign Out
                </button>
            </div>
            <div className="login__cont">
                <input 
                    type="email" 
                    className='login__email'
                    placeholder='Enter email' 
                />
                <input 
                    type="password" 
                    className='login__password'
                    placeholder='Enter password' 
                />
                <button
                    className='login__btn'
                >
                    Login
                </button>
            </div>
        </div>

    )
}

export default Admin