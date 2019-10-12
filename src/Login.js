import React, { Component } from 'react';
import './Login.css';
import eesa_icon from './images/eesa-icon.png';

class Login extends Component{
    render(){
        return (
            <div id="container">
                <div id="input">
                    <div id="username">
                        <p id="username_tag">Username:</p>
                        <input id="username_input" placeholder="username" autoFocus></input>
                    </div>

                    <div id="password">
                        <p id="password_tag">Password:</p>
                        <input id="password_input" placeholder="password" type="password"></input>
                    </div>

                    <div id="links">
                        <a id="create" href="#">Create a new account</a>
                        <a id="forgot" href="#">Forgot your password?</a>
                    </div>
                </div>

                

                <div id="footer">
                    <img id="logo" src={eesa_icon} alt="logo" width="100px" ></img>
                    <p id="footer_text_1">聯絡信箱:ntueesa@gmail.com</p>
                    <p id="footer_text_2">台灣大學電機工程學系 系學會</p>
                </div>

            </div>
        )
    }
}

export default Login;