import React, { Component } from 'react';
import './Register.css';
import eesa_icon from './images/eesa-icon.png';

class Register extends Component{
    render(){
        return(
            <div id="Register_container">
                <div id="Register_register_table">
                    <h1 id="Register_table_title">Just A Few Steps to Join EE+!</h1>
                    <div id="Register_table">
                        <div id="Register_input1">
                            <p id="Register_realname_label">Your Name</p>
                            <input id="Register_realname" placeholder="Your Chinese Name"></input>
                        </div>
                        <div id="Register_input2">
                            <p id="Register_ID_label">Student ID</p>
                            <input id="Register_student_id" placeholder="Student ID"></input>
                        </div>
                        <div id="Register_input3">
                            <p id="Register_password_label">Password</p>
                            <input id="Register_password" placeholder="Set Your Password" type="password"></input>
                        </div>
                        <div id="Register_input4">
                            <p id="Register_confirm_password_label">Confirm Password</p>
                            <input id="Register_confirm_password" placeholder="Confirm Your Password" type="password"></input>
                        </div>
                    </div>
                    <button id="Register_register_button"><p id="Register_register_text">Register</p></button>
                </div>
                <div id="Register_FAQ">
                    <div id="Register_FAQ_title">FAQ</div>
                    <div id="Register_splitline"></div>
                    <div id="Register_FAQ_content">
                        <ul id="Register_FAQ_list">
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