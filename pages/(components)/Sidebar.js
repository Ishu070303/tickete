"use-client"
import { CalendarIcon } from '@chakra-ui/icons';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import useStyles from './style';

import babyMom from '../../public/images/stocks.jpg';
import GirlImage from '../../public/images/stockscopy.jpg';

import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  
  const classes = useStyles();

  return (
   <>
   <Typography variant='h5' className={classes.type3}>Confirm and pay</Typography>
   {/*================= CARD COMPONENT SECTION FOR LARGE DEVICES ========================= */} 
   <div className={classes.SideDiv}>
   <Card  sx={{ maxWidth: 345 }} className={classes.sideCard}>
    <CardMedia sx={{objectFit: 'cover'}}>
      <Image className={classes.Image} src={babyMom} />
      <Image className={classes.ImageCopy} src={GirlImage} />
    </CardMedia>
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