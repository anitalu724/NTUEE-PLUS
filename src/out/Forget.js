import React, { Component } from 'react';
import './Forget.css';
import eesa_icon from '../images/eesa-icon.png';

class Forget extends Component{
    render(){
        return(
            <div id="Forget_container">
                <div id="Forget_left_table">
                    <div id="Forget_input">
                        <p id="Forget_input_text">Student ID</p>
                        <input id="Forget_input_input" placeholder="Student ID"></input>
                    </div>
                    <div id="Forget_input">
                        <p id="Forget_input_text">Your Email</p>
                        <input id="Forget_input_input" placeholder="Your Email"></input>
                    </div>
                    <div id="Forget_input">
                        <p id="Forget_input_text">Quation</p>
                        <input id="Forget_input_input" placeholder="Your favorite movie"></input>
                    </div>
                    <div id="Forget_input">
                       <p id="Forget_input_text">Temporary Password</p>
                        <input id="Forget_input_input" placeholder="登入後須設定新密碼"></input>
                    </div>
                    <div id="Forget_btn">
                        <button id="Forget_btn_text">RESET PASSWORD</button>
                    </div>
                </div>

                <div id="Forget_FAQ">
                    <div id="Forget_FAQ_title">FAQ</div>
                    <div id="Forget_FAQ_splitline"></div>
                    <div id="Forget_FAQ_content">
                        <ul id="Forget_FAQ_list">
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
export default Forget
