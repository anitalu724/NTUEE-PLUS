import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TypoGraphy from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
class NavItem extends Component {
    render() {
        return(
            <ListItem button="true">
                <TypoGraphy variant="title" style={{fontSize: '16px', marginRight:'0'}}>
                    {this.props.value}
                </TypoGraphy>
            </ListItem>
        );
    }
}
class NavBar extends Component {
    render() {
        return(
            <List component="nav" style={{display:'flex', marginLeft: 'auto'}}>
                <NavItem value="HOME"/>
                <NavItem value="ABOUT US"/>
                <NavItem value="CONTACT US"/>
                <NavItem value="SUPPORT US"/>
                <NavItem value="LOGIN"/>
            </List>
        );
    }
}

export default NavBar;