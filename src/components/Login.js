import React from 'react';
import './Form.css';
import Alert from './Alert';
import { useState} from 'react';

import { connect } from "react-redux";
import setWindowAction from '../actions/actionWindow';

function Login(props) {

  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");

  function Log(){

    let email = document.getElementById('log_email').value;
    let pass = document.getElementById('log_pass').value;

    if(email == "" || pass == ""){
      setError("Не все поля заполнены!")
      setAlert(true)
      return null
    }
    let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(!emailValid){
      setError("Некорректный email!")
      setAlert(true)
      return null
    }
    if(pass.length < 4){
      setError("Пароль слишком короткий!")
      setAlert(true)
      return null
    }
    setAlert(false)

    const apiLog = "https://internsapi.public.osora.ru/api/auth/login"
    fetch(apiLog, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      email: email,
      password: pass,
      })
    })
    .then(res => res.json())
    .then(log => {
        console.log("Вы авторизованы!", log)
        localStorage.setItem("token", log.data.access_token)
        props.setWindowFunction("AddBook")
    }).catch(function(error){
        console.log("Error!!!");
        console.log(error);
    });
  }

  return (
    <div className="Form">
        <form>
            <h1>Login</h1>
            <input id="log_email" type="text" placeholder="Input Email" />
            <input id="log_pass" type="password" placeholder="Input Password" />
            <button type="button" onClick={Log}>SUBMIT</button>
            {(alert) ? <Alert textError={error}/> : null}
        </form>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
      setWindowFunction: window => {
          dispatch(setWindowAction(window))
      }
  }
}

export default connect(null, mapDispatchToProps)(Login);