import React, { Component } from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import TypoGraphy from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
//import NavBar from './component/NavBar.js';
//import Button from '@material-ui/core/Button';
//import Avatar from '@material-ui/core/Avatar';
import './Support.css';
import eesa_icon from './images/eesa-icon.png';

class Support extends Component{
    render(){
        return (
        <div id="container">
            <div id="up">
                <p id="up_text">
                    Your support is vital in enabling NTUEE+ to fulfill
                    <br />
                    our mission to chain all the alumnae in the world.
                </p>
            </div>
             <div id="button">
                <button id="button_text">我是按鈕</button>
            </div>
            <div id="down">
                <p id="down_text">
                    帳戶:700-0001236-0553850
                    <br />
                    備註:NTUEE-PLUS
                </p>
            </div>
           

            <div id="footer">
                <img id="logo" src={eesa_icon} width="100px" alt="logo"></img>
                <p id="footer_text_1">聯絡信箱:ntueesa@gmail.com</p>
                <p id="footer_text_2">台灣大學電機工程學系 系學會</p>
            </div>
        </div>
        )
    }
}

export default Support;
