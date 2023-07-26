import React from 'react';
import { QuestionIcon} from '@chakra-ui/icons';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem',
      [theme.breakpoints.down('md')]:{
        display: 'none'
      }
    },

    head: {
      fontWeight: 'bold',
      fontSize: '20px'
    },

    containerDiv: {
      color: '#474747',
      fontSize: '16px'
    },

    icon: {
      cursor: 'pointer',
      color: '#474747',
      marginRight: '.2rem'
    },

    leftIcon: {
         margin: 'auto'
    },

    iconDiv: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
        marginTop: '1rem',
        width: '6vw',
        height: '3vh',
        backgroundColor : '#474747',
        color: 'white',
        borderRadius: '100%',
        alignItems: 'center',
        marginLeft: '2rem'
      }
    }
}));

const Header = () => {

  const classes = useStyles();

  return (
    <>
     <div className={classes.iconDiv}><KeyboardArrowLeftIcon/></div>
     <div className={classes.container}>
        <div className={classes.head}>
            tickete
        </div>
        <div className={classes.containerDiv}>
            <QuestionIcon className={classes.icon}/>
            Help
        </div>
    </div>
    </>
  )
}

export default Header;