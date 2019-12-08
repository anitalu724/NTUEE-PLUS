import React, { Component } from 'react';
import './Login.css';
import eesa_icon from './images/eesa-icon.png';
import { Link } from 'react-router-dom';
class Login extends Component{
    render(){
        return (
            <div id="Login_container">
                <div id="Login_input">
                    <form method='post'>
                        <div id="Login_username">
                            <p id="Login_username_tag">Username:</p>
                            <input id="Login_username_input" placeholder="username" autoFocus></input>
                        </div>
                        <div id="Login_password1">
                            <p id="Login_password_tag">Password:</p>
                            <input id="Login_password_input" placeholder="password" type="password"></input>
                        </div>
                    </form>
                    <div id="Login_links">
                        <Link id = "Login_create" to="/Register">Create a new account</Link>
                        <Link id = "Login_forgot" to="/Forget">Forgot your password?</Link>
                    </div>
                </div>
                <input id="Login_submit" type="submit" value="LOGIN" />
                <div id="Login_footer">
                    <img id="Login_logo" src={eesa_icon} alt="logo" width="75px" ></img>
                    <p id="Login_footer_text">聯絡信箱 : ntueesa@gmail.com</p>
                    <p id="Login_footer_text">台灣大學電機工程學系 系學會</p>
                </div>
            </div>
        )
    }
}

export default Login;