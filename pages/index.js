"use-client"
import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    div: {
      display: 'flex',
      width: '80vw',
      margin: 'auto', 
      marginTop: '3rem', 
      borderBottom: '1px solid gray',
      paddingBottom: '3rem',

      [theme.breakpoints.down('md')]:{
           display: 'none'
      }    
    },

    divDuplicate: {
       display: 'none',

       [theme.breakpoints.down('md')]: {
        display: 'block',
        width: '100vw',
       }
    },

    mainDiv: {
      flex: '1 1 auto',
      width: '30vw', 
      borderRight: '1px solid gray'
    },

    sidebarDiv: {
      flex: '1 1 auto',
      width: '3rem'
    }
}));

const index = () => {

  const classes = useStyles();

  return (
    <>
    <Header />
    <div className={classes.div}>
      <div className={classes.mainDiv}>
          <Main />
      </div>
      <div className={classes.sidebarDiv}>
          <Sidebar />
      </div>
    </div>

    <div className={classes.divDuplicate}>
      <div style={{ width: '100vw'}}>
          <Sidebar />
      </div>
      <div >
          <Main />
      </div>
    </div>


    <Section />
    <Footer />
    </>
  )
}

export default index;