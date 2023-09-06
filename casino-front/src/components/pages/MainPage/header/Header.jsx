import React from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from 'react-redux';
import classes from "./Header.module.css";
import logoSrc from "../../../../images/logo.png";
import { setShowModal} from "../../../../store/ProfileSlice";
import profileStyles from "./Profile.module.css";


const Header = () => {

    const dispatcher = useDispatch();
    const isLogged = useSelector(state => state.loggedIn);
    

    const loginButtonClasses = [classes.loginButton];
    const regButtonClasses = [classes.regButton];
    const profileClasses = [profileStyles.profile];

    if (isLogged) {
        profileClasses.push(profileStyles.active);
    } else {
        loginButtonClasses.push(classes.active);
        regButtonClasses.push(classes.active);
    }

    return (
        <header>
            <div className= {classes.leftSideBox}>
                <a href="#">
                    <img className={classes.logo} src={logoSrc} alt="" />
                </a>

            <span className={classes.selected}>Crash</span>
            <span>MinesGame</span>

            </div>   

            <div className={classes.rightSideBox}>
                <button className={loginButtonClasses.join(' ')} onClick={() => dispatcher(setShowModal("login"))}>Вход</button>
                <button className={regButtonClasses.join(' ')} onClick={() => dispatcher(setShowModal("signup"))}>Регистрация</button>
                <Profile className={profileClasses.join(' ')}/>
            </div>
            
            
        </header>
    )
     
}

export default Header;