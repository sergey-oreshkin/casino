import React, { useState } from "react";
import classes from "./SignUpForm.module.css";
import Input from "../../UI/input/Input";
import FormButton from "../../UI/buttons/formButton/FormButton";
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from "../../../store/ProfileSlice";
import { signUp, logIn } from "../../../store/API/AuthApi";

const SignUpForm = () => {

    const info = useSelector(state => state.modalInfo);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatcher = useDispatch(); 

    return (
        <div className={classes.signUpForm}>

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

            <FormButton onClick={() => {dispatcher(signUp({login:login, password:password}))}}>Register</FormButton>

            <div>
                <span>Already have an account? </span>
                <span className={classes.changeForm} onClick={() => dispatcher(setShowModal("login"))}>Sign in</span>
            </div>
        </div>

    )
}

export default SignUpForm;