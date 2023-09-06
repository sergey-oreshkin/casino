import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import Input from "../../UI/input/Input";
import FormButton from "../../UI/buttons/formButton/FormButton";
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from "../../../store/ProfileSlice";
import { logIn } from "../../../store/API/AuthApi";

const LoginForm = () => {

    const info = useSelector(state => state.modalInfo);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatcher = useDispatch(); 

    return (
        <div className={classes.loginForm}>
            {info ?<div>{info}</div> : ""}
            <Input
                type='text'
                placeholder='Login'
                value={login}
                onChange={e => setLogin(e.target.value)}
            />

            <Input
                type='text'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <FormButton onClick={() => {dispatcher(logIn({login:login, password:password}))}}>Log in</FormButton>

            <span className={classes.changeForm} onClick={() => dispatcher(setShowModal("signup"))}>Create account</span>
            
        </div>

    )
}

export default LoginForm;