import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    const [user, setUser] = useState([{userName: '', password: ''}]);
    
    const history = useHistory();

    const HandleLogin = () => {
        if(user.userName === 'prshant' && user.password === 'prshant123') {
            history.push('/product-list');
        } else {
            alert('Wrong username or password!');
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <label style={{marginRight: 20}}>Username</label>
            <input type="text" placeholder="Enter username" onChange={(e) => setUser({...user, userName: e.target.value})}></input>
            <br></br>
            <br></br>
            <label style={{marginRight: 20}}>Password</label>
            <input type="password" placeholder="Enter password" onChange={(e) => setUser({...user, password: e.target.value})}></input>
            <br></br>
            <br></br>
            <button onClick={HandleLogin} disabled={!user.userName || !user.password}>Login</button>
        </div>
    )
}

export default Login
