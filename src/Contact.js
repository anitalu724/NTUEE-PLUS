
=======
import React, { Component } from 'react';
import './Contact.css';
import eesa_icon from './images/eesa-icon.png';
import left_image from './images/left_image.png';
import right_image from './images/right_image.png';

class Contact extends Component{
    render(){
        return (
        <div id="container">
            
            <div id="left_column">
                <div id="left_image"><img src={left_image} alt="leftImage" width="250px" height="250px" /></div>
                <p id="left_text">
                    李筠婕
                    <br />
                    b06901014
                </p>
            </div>
            <div id="right_column">
                <div id="right_image"><img src={right_image} alt="rightImage" width="250px" height="250px" /></div>
                <p id="right_text">
                    鄭謹譯
                    <br />
                    b06901180
                </p>
            </div>
            <div id="footer">
                <img id="logo" src={eesa_icon} width="100px"></img>
                <p id="footer_text_1">聯絡信箱:ntueesa@gmail.com</p>
                <p id="footer_text_2">台灣大學電機工程學系 系學會</p>
            </div>
        </div>
        )
    }
}

>>>>>>> remotes/origin/master
export default Contact;