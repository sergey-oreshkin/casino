import React from "react";
import Profile from "./header/Profile";
import Modal from "../../UI/modalWindows/Modal";
import LoginForm from "../../forms/loginForm/LoginForm";
import SignUpForm from "../../forms/signUpForm/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { balance } from "../../../store/API/AuthApi";
import Header from "./header/Header";


const MainPage = () => {

    const dispatcher = useDispatch();
    const isLogged = useSelector(state => state.loggedIn);
    const username = useSelector(state => state.username);
    const bal = useSelector(state => state.balance);

    return (
        <>
           <Header/>


            <Modal name={'login'}>
                <LoginForm/>
                
            </Modal>

            <Modal name={'signup'}>
                <SignUpForm/>
            </Modal>

            <button onClick={() => {
                dispatcher(balance());
                console.log({username});

                }}>test</button>
        </>


       
    )
}

export default MainPage;