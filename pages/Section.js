import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from '@mui/material';
import React from 'react'; 
import {data} from '../data';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
   SectionDiv: {
    width: '80vw', 
    margin: 'auto', 
    borderBottom: '1px solid #D6D6D6', 
    paddingBottom: '3rem',
    display:'flex',

    [theme.breakpoints.down('md')]: {
        display: 'block',
        width: '80vw',
        margin: 'auto'
    }
   },

   SectionDivChild: {
    flex: "1 1 auto",
    width: '50vw',

    [theme.breakpoints.down('md')]: {
    //   border: '2px solid black', 
      width: '80vw',
      margin: 'auto'
    }
   },

   SectionDivh4: {
    color: '#474747', 
    marginTop: '4rem',
    fontWeight: '600',
    fontSize: '24px',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black', 
        width: '80vw',
        margin: 'auto',
        marginTop: '2rem',
        fontSize: '18px'
    }
   },

   Accordion: {
    width: '50vw',
    marginTop: '.25rem',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black', 
        width: '80vw',
        margin: 'auto',
        marginTop: '.25rem'
    }
   },

   sectionHeight: {
    marginTop: '2rem'
   },

   type1 :{
    color: '#474747',
    fontSize: '18px',
    fontWeight: '600',

    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
   },

   type2: {
    color: '#595959',
    fontSize: '16px',
    fontWeight: '400'
   },

   chatPaper: {
    marginTop: '4rem', 
    backgroundColor: '#FFF7ED', 
    color: '#7F2D0F', 
    height: '10vw',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        marginTop: 0,
        height: '40vw'
    }
   },

   chatPaperDiv: {
    width: '14vw', 
    margin:'auto',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        width: '70vw',
        margin: 'auto'
    }
   },

   chatDiv: {
    flex: '1 1 auto',
    width: '3rem',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        width: '80vw',
        margin: 'auto',
        marginTop: '2rem'
    }
   },

   chath6: {
    fontWeight: '600',
    fontSize: '18px'
   },

   chatpara: {
    fontWeight: '400',
    fontSize: '16px'
   },

   chatButton :{
    border: '1px solid #7F2D0F', 
    color: '#7F2D0F', 
    marginLeft: '1.7rem', 
    marginTop:'2rem',
    fontWeight: '600',
    fontSize: '16px',

    [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        marginLeft : '1rem',
        marginBottom: '1rem'
    }
   },
}));

const Section = () => {

    const classes = useStyles();

    return (  
    <div className={classes.SectionDiv}>
        {/*==================== SECTION OF FAQ FOR BIG AND SAMLL SCREENS ========================= */}
        <div className={classes.SectionDivChild}>
            <h4 className={classes.SectionDivh4}>Frequently asked questions</h4>
            <div className={classes.sectionHeight}>
            {
               data.map((item, index) => (
                <Accordion className={classes.Accordion} key={index}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.type1}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.type2}>{item.desc}</Typography>
                </AccordionDetails>
                </Accordion>
               ))
            }
            </div>
        </div>

        {/*==================== HELP AND CHAT SECTION FOR BIG AND SAMLL SCREENS ========================= */}
        <div className={classes.chatDiv}>
            <Paper className={classes.chatPaper}>
                <div className={classes.chatPaperDiv}>
                    <div className='mt-5'>
                        <h6 className={classes.chath6}>Need help?</h6>
                        <p className={classes.chatpara}>We're here to help, 24*7</p>
                    </div>
                    <div>
                         <QuickreplyIcon />
                    </div>
                </div>
                <Button className={classes.chatButton} variant='outlined'>Chat with us</Button>
            </Paper>
        </div>
    </div>
  )
}

export default Section;