/* eslint-disable no-constant-condition */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from '../../assets/styles/css/Header.module.css';

const Footer = () => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" className={'[aria-selected]' === true ? styles.active : ''} />
      <Tab label="Item Two" className={'[aria-selected]' === true ? styles.active : ''} />
      <Tab label="Item Three" className={'[aria-selected]' === true ? styles.active : ''} />
    </Tabs>
  </Paper>
);

export default Footer;
