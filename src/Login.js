import React, { Component } from 'react';
import './Login.css';
import eesa_icon from './images/eesa-icon.png';

class Login extends Component{
    render(){
        return (
            <div id="Login_container">
                <div id="Login_input">
                    <div id="Login_username">
                        <p id="Login_username_tag">Username:</p>
                        <input id="Login_username_input" placeholder="username" autoFocus></input>
                    </div>

                    <div id="Login_password1">
                        <p id="Login_password_tag">Password:</p>
                        <input id="Login_password_input" placeholder="password" type="password"></input>
                    </div>

                    <div id="Login_links">
                        <a id="Login_create" href="#">Create a new account</a>
                        <a id="Login_forgot" href="#">Forgot your password?</a>
                    </div>
                </div>

                

                <div id="Login_footer">
                    <img id="Login_logo" src={eesa_icon} alt="logo" width="100px" ></img>
                    <p id="Login_footer_text_1">聯絡信箱:ntueesa@gmail.com</p>
                    <p id="Login_footer_text_2">台灣大學電機工程學系 系學會</p>
                </div>

            </div>
        )
    }
}

export default Login;