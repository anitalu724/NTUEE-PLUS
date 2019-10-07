import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NavBar from './component/NavBar.js';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
 
import icon from './images/logo_row.png';


class App extends Component {
	render() {
		return (
			<div style={{height:'100%', width: '100%'}}>
				<AppBar id="appBar" position="static">
					<Toolbar style={{display:'flex'}}>
						<Avatar src={icon} id="avatar"></Avatar>
						<NavBar/>
						<TypoGraphy>

						</TypoGraphy>
					</Toolbar>
				</AppBar>
				<Paper id="paperContainer">
					<div id="backgroundImageContainer"></div>
					<div id="outerContainer">
						<TypoGraphy variant="title" id="entryTitle">
							NTUEE+
						</TypoGraphy>
						<div id="innerContainer">
							<Button id="button1">聯絡我們</Button>
							<Button id="button2">台大電機系官網</Button>
						</div>
					</div>
				</Paper>
			</div>
		);
	}
}

export default App;