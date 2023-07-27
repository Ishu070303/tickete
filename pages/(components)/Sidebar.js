"use-client"
import { CalendarIcon } from '@chakra-ui/icons';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import babyMom from './(assests)/stocks.jpg'
import React from 'react';

const useStyles = makeStyles((theme) => ({
  SideDiv: {
    margin: 'auto',
    borderBottom: '1px solid gray', 
    width: '23vw', 
    marginLeft : '4rem',

    [theme.breakpoints.down('md')]: {
      // border :"2px solid black",
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem'
    }
  },

  sideCard: {
    marginBottom : '2rem',

    [theme.breakpoints.down('md')]: {
      // border :"2px solid black",
    }
  },

  sideTypo: {
    color: '#474747',
    fontWeight: '600',
    fontSize: '18px',
  },

  contentDiv: {
    marginTop: '1rem',
    alignItems: 'center',
  },

  contentDivChild: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '.5rem'
  },

  contentDivIcon: {
    color: '#474747'
  },

  contentDivPara: {
    fontWeight : '600',
    fontSize: '16px',
    color : '#474747',
    marginLeft: '0.75rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }
  },

  TicketsDiv: {
    width: '23vw', 
    borderBottom : '1px solid gray', 
    marginLeft : '4rem',
    margin : 'auto', 
    marginTop : '3rem',

    [theme.breakpoints.down('md')]: {
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem'
    }
  },

  TicketsDivh6: {
    color: '#474747',
    fontWeight: '600',
    fontSize: '18px' 
  },

  TicketsDivChild: {
    marginTop : '.75rem'
  },

  TicketsDivs: {
    color: '#474747',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '400',
    marginBottom: '.5rem'
  },

  promoDiv: {
    width: '23vw', 
    margin: 'auto', 
    marginTop: '2rem', 
    marginLeft : '4rem',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },

  promoDivCopy: {
     display: 'none',

     [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem'
     }
  },

  promoDivChild: {
    display: 'flex'
  },

  promoDivChildp: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },

  promoIcon: {
    color :'#006642'
  },

  promoPara: {
    color :'#006642',
    fontWeight: '600',
    fontSize: '14px',
  },

  totalSection: {
    width: '23vw', 
    margin: 'auto', 
    marginTop: '2rem', 
    borderTop: '1px solid gray', 
    marginLeft : '4rem',

    [theme.breakpoints.down('md')]: {
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem',
    }
  },

  totalDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '3rem',
  },

  totalDivh4: {
    color: '#474747',
    fontWeight: '600',
    fontSize: '16px',
  },

  totalDivPara: {
    color: '#595959',
    fontSize: '12px',
    fontWeight: '400',
  },

  CancelDiv: {
    width: '23vw', 
    margin: 'auto', 
    marginTop: '2rem', 
    marginLeft : '4rem',
    // border: '1px solid black',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: '1rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid gray',
      marginLeft: 0
    }
  },

  cancelpaperDiv: {
    backgroundColor: '#F5F5F5', 
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      width: '80vw',
      margin: 'auto',
      marginTop: '1rem',
    }

  },

  cancelpaperDivh4: {
    color: '#474747',
    fontWeight: '600',
    fontSize: '14px',
  },

  cancelpaperDivpara: {
    color: '#595959',
    fontWeight: '400',
    fontSize: '14px',
  },

  type3: {
    display: 'none',

    [theme.breakpoints.down("md")]: {
        display: 'block',
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '2rem',
        color: '#474747',
        width: '80vw',
        margin: 'auto',
        marginTop: '2rem'
    }
   }

}));


const Sidebar = () => {
  
  const classes = useStyles();

  return (
   <>
   <Typography variant='h5' className={classes.type3}>Confirm and pay</Typography>
   {/*================= CARD COMPONENT SECTION FOR LARGE DEVICES ========================= */} 
   <div className={classes.SideDiv}>
   <Card  sx={{ maxWidth: 345 }} className={classes.sideCard}>
    <CardMedia sx={{height: 140, objectFit: 'cover'}} component="img" src={babyMom} />
    <CardContent>
      <Typography className={classes.sideTypo} variant='h4'> Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House</Typography>
      <div className={classes.contentDiv}>
        <div className={classes.contentDivChild}><ExtensionIcon className={classes.contentDivIcon}/> <p className={classes.contentDivPara}> Eshika Rawat </p></div>
        <div className={classes.contentDivChild}><CalendarIcon className={classes.contentDivIcon} style={{marginLeft: '.3rem'}}/> <p className={classes.contentDivPara}> 22 July 2023 </p></div>
        <div className={classes.contentDivChild}><WatchLaterIcon className={classes.contentDivIcon}/> <p className={classes.contentDivPara}> 4:00 PM </p></div>
      </div>
    </CardContent>
   </Card>
   </div>

   {/*================= TICKETS OVERVIEW SERCTION FOR LARGE DEVICES ========================= */} 
   <div className={classes.TicketsDiv}>
     <h6 className={classes.TicketsDivh6}>Tickets overview</h6>
     <div className={classes.TicketsDivChild}>
      <div className={classes.TicketsDivs}><p>Pax type</p> <p>346</p></div>
      <div className={classes.TicketsDivs}><p>Pax type</p> <p>346</p></div>
      <div className={classes.TicketsDivs}><p>fee</p> <p>346</p></div>
      <div className={classes.TicketsDivs} style={{ color: '#006642'}}><p>Discount Applied</p> <p>-20%</p></div>
     </div>
   </div>

   {/*================= PROMO CODE FOR LARGE DEVICES ========================= */}  
   <div className={classes.promoDiv}>
     <BookmarkIcon className={classes.promoIcon} />
     <p className={classes.promoPara} >Have a promo code?</p>
   </div>

    {/*================= PROMO CODE SECTION FOR SMALL SCREENS ========================= */}
    <div className={classes.promoDivCopy}>
      <div className={classes.promoDivChild}>
        <BookmarkIcon className={classes.promoIcon} />
        <p className={classes.promoPara}>‘TICKETE10’ applied</p>
     </div>
     <p className={classes.promoDivChildp}>Remove</p>
    </div>

    
    {/*================= TOTAL SECTION IN SIDE BAR FOR BOTH BIG AND SMALL SCREENS ========================= */}
   <div className={classes.totalSection}>
     <div className={classes.totalDiv}>
      <h4 className={classes.totalDivh4}>Total</h4>
      <h4 className={classes.totalDivh4}>50000</h4>
     </div>
     <p className={classes.totalDivPara}>You will pay in $ </p>
   </div>

   {/*================= CANCELLETAION SECTION IN SIDE BAR FOR BOTH BIG AND SMALL SCREENS ========================= */}
   <div className={classes.CancelDiv}>
    <Paper className={classes.cancelpaperDiv}>
      <h4 className={classes.cancelpaperDivh4}>Free cancellation</h4>
      <p className={classes.cancelpaperDivpara}>Cancel before 22 July for a full refund</p>
    </Paper>
   </div>
   </>
  )
}

export default Sidebar;