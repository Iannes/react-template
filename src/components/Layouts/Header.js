import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from '../../assets/styles/css/Header.module.css';

const Header = () => (
  <AppBar position="static">
    <Toolbar className={styles.headerStyles}>
      <Typography variant="h6" color="inherit">
        Budget
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
