import React, { Component } from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import TypoGraphy from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
//import NavBar from './component/NavBar.js';
//import Button from '@material-ui/core/Button';
//import Avatar from '@material-ui/core/Avatar';
import './About.css';
import eesa_icon from './images/eesa-icon.png';

class Support extends Component{
    render(){
        return (
        <div id="container">
            <div id="up">
                <h1 id="up_text">
                    Welcome to NTUEE+
                </h1>
            </div>
            
            <div id="down">>
                <p id="down_text">
                    試著回想18歲的自己，未來的人脈往往成為促使我們選擇台大電機的原因，<br/>
                    然而曾經我們引以為傲的人脈資產，現在卻如此凋零。<br/>
                    一瞥世界上知名大學，他們都擁有一個共通點：人脈網絡。<br/>
                    哈佛大學的老爺爺願意為了甫錄取的學弟妹提點長談，<br/>
                    史丹佛大學的前輩也不遺餘力提拔後進。<br/>
                    相比之下，我們認為系上一直缺乏專屬平台供系友建立緊密的網路，遂使人脈日益薄弱。<br/>
                    近年創立的NTUEE Chain已經輔導眾多學生申請上國外一流大學，<br/>
                    我們更希望延續EE Chain的初衷， 讓這份互相傳承聯絡的心拓展到所有系友。<br/>
                    繼承著B03~B05學長姐們的意志，<br/>
                    我們希望這個聯絡網能成為一個整合式的社群網路，讓NTUEErs聚在一起；<br/>
                    秉持著恢復人脈網的精神，讓NTUEE能在世界上有更大的影響力；<br/>
                    建立一個連結電機系的共同回憶，讓系友們有專屬的家！
                </p>
            </div>

            <div id="footer">
                <img id="logo" src={eesa_icon} width="100px" alt="logo"></img>
                <p id="footer_text">
                    聯絡信箱:ntueesa@gmail.com<br/>
                    台灣大學電機工程學系 系學會
                </p>
            </div>
        </div>
        )
    }
}

export default Support;