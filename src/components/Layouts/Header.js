import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from '../../assets/styles/css/Header.module.css';

class Header extends Component {

  state = {
    title: 'Budget',
    targetBudget: "",
    totalEstimate: "",
    totalBooked:"",    
  }
  
  render() {
    return (
      <AppBar position="static">
        <Toolbar className={styles.headerStyles}>
          <Typography variant="h5" color="inherit">
            {this.state.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
