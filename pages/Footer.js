import React from 'react';
import { trust }from '../data';

import VerifiedIcon from '@mui/icons-material/Verified';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SecurityIcon from '@mui/icons-material/Security';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { CardContent, CardMedia, Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    FooterDiv: {
        width: '80vw', 
        margin: 'auto', 
        marginTop: '4rem',

        [theme.breakpoints.down('md')]: {
            marginTop: '2rem',
        }
    },

    FooterDivh4: {
        color: '#474747',
        fontSize: '24px',
        fontWeight: '600',

        [theme.breakpoints.down('md')]: {
            fontSize: '18px'
        }
    },

    FooterDivChild: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.25rem',

        [theme.breakpoints.down('md')]: {
        //    border: '2px solid black',
           display: 'block',
           width: '80vw',
           marginTop:'1rem'
        }
    },

    FooterCard: {
        width: '20rem', 
        border: '1px solid #D6D6D6',
        marginBottom: '2rem',
        marginRight: '0.5rem',

        [theme.breakpoints.down('md')]: {
            width: '80vw',
            display: 'flex', 
            alignItems: 'center'
        }
    },

    FooterCardMedia: {
        marginLeft: '2rem',
        marginTop: '.5rem',

        [theme.breakpoints.down('md')]: {
            marginLeft: '.2rem',
            marginTop : 0
        }
    },

    FooterType1: {
        color: '#474747',
        fontWeight: '600',
        fontSize: '16px'
    },

    FooterType2: {
        color: '#474747', 
        width: '74%',
        fontWeight: '400',
        fontSize: '16px',

        [theme.breakpoints.down('md')]: {
            fontSize: '14px', 
            width: '75vw'
        }
    }
}));

const Footer = () => {

  const getIconComponent = (iconName, color) => {
    switch(iconName){
        case 'VerifiedIcon':
            return <VerifiedIcon style={{color}} />
        
        case 'MessageIcon': 
            return <MessageIcon style={{color}} />

        case 'CalendarTodayIcon':
            return <CalendarTodayIcon style={{color}} />

        case 'SecurityIcon':
            return <SecurityIcon style={{color}} />

        default: 
            return null;
    }
  }

  const classes = useStyles();

  return (
    
    <>
    {/*=========================== POLICY SECTION FOR BIG AND SMALL SCREENS ================================= */}
    <div className={classes.FooterDiv}>
        <h4 className={classes.FooterDivh4}>The Tickete promise</h4>
        <div className={classes.FooterDivChild}>
          {
            trust.map((item, index) => (
                <Card key={index} className= {classes.FooterCard}>
                    <CardMedia className={classes.FooterCardMedia}>{getIconComponent(item.img, item.color)}</CardMedia>
                    <CardContent>
                        <Typography className={classes.FooterType1} variant='h6'>{item.title}</Typography>
                        <Typography className={classes.FooterType2} variant='body2'>{item.desc}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>

    {/*=========================== FOOTER END SECTION FOR BIG AND SMALL SCREENS ================================= */}
    <div className='mt-5' style={{ backgroundColor: 'black', height: '30vh'}}>
        <Typography className='py-9' style={{color: 'white', width: '90vw', margin:'auto', }} variant='h3'>tickete</Typography>

        <div className='mt-4' style={{borderTop: '1px solid white', width:'90vw', margin: 'auto'}}>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <ul className='flex list-disc justify-between' style={{ color: 'white', width: '27vw'}}>
                        <li className='font-normal text-base list-none'>© Tickete Inc.</li>
                        <li className='font-normal text-base'>Privacy</li>
                        <li className='font-normal text-base'>Terms</li>
                        <li className='font-normal text-base'>Cancellation policy</li>
                    </ul>
                </div>
                <div className='flex w-20 justify-between'>
                    <InstagramIcon style={{color :'white'}} />
                    <FacebookIcon  style={{color :'white'}}  />
                    <TwitterIcon  style={{color :'white'}}  />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;