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

  return (
    <>
    <div style={{width: '90vw', margin: 'auto', marginTop: '4rem'}}>
        <h4 className='font-semibold text-2xl' style={{ color: '#474747'}}>The Tickete promise</h4>
        <div className='flex justify-between mt-5'>
          {
            trust.map((item, index) => (
                <Card key={index} className= 'mb-4' style={{ width: '20rem', border: '1px solid #D6D6D6'}}>
                    <CardMedia className='ml-4 mt-2'>{getIconComponent(item.img, item.color)}</CardMedia>
                    <CardContent>
                        <Typography style={{color: '#474747'}} className='font-semibold text-base' variant='h6'>{item.title}</Typography>
                        <Typography style={{color: '#474747', width: '74%'}} className='font-normal text-base' variant='body2'>{item.desc}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
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