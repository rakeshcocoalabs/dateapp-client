import './login.css';
import React, { useState } from 'react';
const axios = require('axios');


function Login() {

    const [userEmail, setUserEmail] = useState('');

    const [userPass, setPass] = useState('');

    const [status, setStatus] = useState('');

    const handleChangeEmail =(e) => {

        setUserEmail(e.target.value);
    }

    const handleChangePass =(e) => {

        setPass(e.target.value);
    }

    const onLoginBtnClicked = ()=>{

        console.log('entered')

        axios.post('http://127.0.0.1:9000/accounts/login', {
            email: userEmail,
            password: userPass
          })
          .then(function (response) {
            console.log('entered1')
            console.log(response.data.message);
            setStatus(response.data.message);
          })
          .catch(function (error) {
            console.log('entered2')
            console.log(error.message);
          });
    }
  return (
    <div className="login">
        <input type="text" onChange={handleChangeEmail} name="email" />
        <br/>
        <input type="password" onChange={handleChangePass} name="password"/>
        <br/>
        <p>{status}</p>
        <br/>
        <button type="submit" value="Login" onClick={()=>{onLoginBtnClicked()}}>Log in</button>
    </div>
  );
}

export default Login;