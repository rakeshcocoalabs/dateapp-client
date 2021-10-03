
import React, {useState} from 'react';
const axios = require('axios');


function SignUp() {

    const [userEmail, setUserEmail] = useState('');

    const [userPass, setPass] = useState('');

    const [userName, setName] = useState('');

    const [status, setStatus] = useState('');

    const handleChangeEmail = (e) => {

        setUserEmail(e.target.value);
    }

    const handleChangePass = (e) => {

        setPass(e.target.value);
    }

    const handleChangeName = (e) => {

        setName(e.target.value);
    }

    // const update = {
    //     email: userEmail,
    //     password: userPass,
    //     name: userName,
    // };

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(update),
    // };



    const onSignupBtnClicked = () => {

        // fetch('http://127.0.0.1:9000/accounts/register', options)
        //     .then(data => {
        //         if (!data.ok) {
        //             throw Error(data.status);
        //         }

        //         return data.json();
        //     }).then(update => {
        //         console.log(update);

        //         setStatus('ok')
               
        //     }).catch(e => {
        //         console.log(e);
        //     });


        axios.post('http://127.0.0.1:9000/accounts/register', {
            email: userEmail,
            password: userPass,
            name: userName,
          })
          .then(function (response) {
            console.log(response.data.message);
            setStatus(response.data.message);
          })
          .catch(function (error) {
            console.log(error.message);
          });



        // axios.post('http://127.0.0.1:9000/accounts/register', {
        //     email: userEmail,
        //     password: userPass,
        //     name:userName
        //   })
        //   .then(function (response) {
        //     console.log(response.data.message);
        //     setStatus(response.data.message);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    return (
        <div className="signup">
            <input type="text" onChange={handleChangeEmail} name="email" />
            <br />
            <input type="password" onChange={handleChangePass} name="password1" />
            <br />

            <input type="text" onChange={handleChangeName} name="name" />
            <br />
            <p>{status}</p>
            <br />
            <button type="submit" value="Signup" onClick={() => { onSignupBtnClicked() }}>Sign Up</button>
        </div>
    );
}

export default SignUp;