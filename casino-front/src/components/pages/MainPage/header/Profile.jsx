import React from "react";
import loginSrc from "../../../../images/login.png";
import avatarSrc from "../../../../images/avatar.png";
import FormButton from "../../../UI/buttons/formButton/FormButton";
import classes from "./Profile.module.css";
import { useDispatch, useSelector} from "react-redux";
import { logOut } from "../../../../store/ProfileSlice";
import logoutSrc from '../../../../images/logout.png';


const Profile = (props) => {
    const dispatcher = useDispatch();

    const isLogged = useSelector(state => state.loggedIn);
    const username = useSelector(state => state.username);
    const balance = useSelector(state => state.balance);

    return (
        <div className={props.className}>
            <img src={avatarSrc} alt="" id={classes.avatar}/>
            <div className={classes.profileInfo}>
                <div>
                    <span>{username} </span>
                <img src = {logoutSrc} onClick={() => {dispatcher(logOut()); localStorage.removeItem('token')}}/>       
                </div>
                <span>{balance} ₽</span> 
            </div>
            
            
        </div>
    )     
    
            // <div className={classes.auth} onClick={() => dispatcher(setShowModal("login"))}>
            //     <img src={loginSrc} alt="" />
            //     <span>Войти</span>
            // </div>
    
}

export default Profile;