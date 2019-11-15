import React, { Component } from 'react';
import './Register.css';
import eesa_icon from './images/eesa-icon.png';

class Register extends Component{
    render(){
        return(
            <div id="container">
                <div id="register_table">
                    <h1 id="table_title">Just A Few Steps to Join EE+!</h1>
                    <div id="table">
                        <div id="input1">
                            <p id="realname_label">Your Name</p>
                            <input id="realname" placeholder="Your Chinese Name"></input>
                        </div>
                        <div id="input2">
                            <p id="ID_label">Student ID</p>
                            <input id="student_id" placeholder="Student ID"></input>
                        </div>
                        <div id="input3">
                            <p id="password_label">Password</p>
                            <input id="password" placeholder="Set Your Password" type="password"></input>
                        </div>
                        <div id="input4">
                            <p id="confirm_password_label">Confirm Password</p>
                            <input id="confirm_password" placeholder="Confirm Your Password" type="password"></input>
                        </div>
                    </div>
                    <button id="register_button"><p id="register_text">Register</p></button>
                </div>
                <div id="FAQ">
                    <div id="FAQ_title">FAQ</div>
                    <div id="splitline"></div>
                    <div id="FAQ_content">
                        <ul id="FAQ_list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register