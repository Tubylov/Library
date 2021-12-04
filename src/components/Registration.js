import React from 'react';
import './Form.css';
import Alert from './Alert';
import { useState } from 'react';

import { connect } from "react-redux";
import setWindowAction from '../actions/actionWindow';

function Registration(props) {

  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");

  function Reg(){

    let login = document.getElementById('reg_name').value;
    let email = document.getElementById('reg_email').value;
    let pass = document.getElementById('reg_pass').value;
    let confirm = document.getElementById('confirm_pass').value;

    if(login == "" || email == "" || pass == "" || confirm == ""){
      setError("Не все поля заполнены!")
      setAlert(true)
      return null
    }
    if(login.length < 2){
      setError("Имя слишком короткое!")
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
    if(confirm != pass){
      setError("Пароли не совпадают!")
      setAlert(true)
      return null
    }
    setAlert(false)

    const apiReg = "https://internsapi.public.osora.ru/api/auth/signup"
    fetch(apiReg, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name: login,
      email: email,
      password: pass,
      password_confirmation: confirm
      })
    })
    .then(res => res.json())
    .then(reg => {
        console.log("Вы зарегистрированы!", reg)
        props.setWindowFunction("Login")
    }).catch(function(error){
        console.log("Error!!!");
        console.log(error);
    });
  }

  return (
    <div className="Form">
        <form>
            <h1>Registration</h1>
            <input id="reg_name" type="text" placeholder="Input Name" />
            <input id="reg_email" type="email" placeholder="Input Email" />
            <input id="reg_pass" type="password" placeholder="Input Password" />
            <input id="confirm_pass" type="password" placeholder="Confirm password" />
            <button type="button" onClick={Reg}>SUBMIT</button>
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

export default connect(null, mapDispatchToProps)(Registration);