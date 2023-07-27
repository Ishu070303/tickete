import React from 'react';
import { QuestionIcon} from '@chakra-ui/icons';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import useStyles from './style';


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