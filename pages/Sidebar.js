import { CalendarIcon } from '@chakra-ui/icons';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react';


const Sidebar = () => {
  return (
   <>
   {/*Card component*/}
   <div className='m-auto' style={{ borderBottom: '1px solid gray', width: '23vw', marginLeft : '4rem'}}>
   <Card  sx={{ maxWidth: 345 }} style={{marginBottom: '2rem'}}>
    <CardMedia sx={{height: 140}} image='sex.png'/>
    <CardContent>
      <Typography style={{ color: '#474747'}} className='text-lg font-semibold' variant='h4'> Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House</Typography>
      <div className='mt-2 items-center'>
        <div className='flex'><ExtensionIcon className='mt-1' style={{color: '#474747'}} /> <p className='font-normal text-base ml-3' style={{ color : '#474747'}}>Eshika Rawat</p></div>
        <div className='flex'><CalendarIcon className='mt-1 ml-1' style={{color: '#474747', }} /> <p className='font-normal text-base ml-3' style={{ color : '#474747'}}>22 July 2023</p></div>
        <div className='flex'><WatchLaterIcon className='mt-1' style={{color: '#474747'}} /> <p className='font-normal text-base ml-3' style={{ color : '#474747'}}>4:00 PM</p></div>
      </div>
    </CardContent>
   </Card>
   </div>

   <div className='mt-4 m-auto' style={{ width: '23vw', borderBottom : '1px solid gray', marginLeft : '4rem'}}>
     <h6 className='font-semibold text-lg' style={{color: '#474747'}}>Tickets overview</h6>
     <div className='mt-3'>
      <div className='flex justify-between text-base font-normal mb-2' style={{ color: '#474747'}}><p>Pax type</p> <p>346</p></div>
      <div className='flex justify-between text-base font-normal mb-2' style={{ color: '#474747'}}><p>Pax type</p> <p>346</p></div>
      <div className='flex justify-between text-base font-normal mb-2' style={{ color: '#474747'}}><p>fee</p> <p>346</p></div>
      <div className='flex justify-between text-base font-normal mb-2' style={{ color: '#006642'}}><p>Discount Applied</p> <p>-20%</p></div>
     </div>
   </div>

   <div className='flex'style={{width: '23vw', margin: 'auto', marginTop: '2rem', marginLeft : '4rem'}}>
     <BookmarkIcon style={{ color :'#006642'}}/>
     <p className='font-semibold text-sm ' style={{ color :'#006642'}}>Have a promo code?</p>
   </div>

   <div style={{width: '23vw', margin: 'auto', marginTop: '2rem', borderTop: '1px solid gray', marginLeft : '4rem' }}>
     <div className='flex justify-between mt-4'>
      <h4 className='font-semibold text-base' style={{ color: '#474747'}}>Total</h4>
      <h4 className='font-semibold text-base' style={{ color: '#474747'}}>50000</h4>
     </div>
     <p className="font-normal text-xs underline" style={{ color: '#595959'}}>You will pay in $ </p>
   </div>

   <div style={{width: '23vw', margin: 'auto', marginTop: '2rem', marginLeft : '4rem'}}>
    <Paper style={{ backgroundColor: '#F5F5F5', padding: '1rem' }}>
      <h4 className='text-sm font-semibold' style={{ color: '#474747'}}>Free cancellation</h4>
      <p className='text-sm font-normal' style={{ color: '#595959'}}>Cancel before 22 July for a full refund</p>
    </Paper>
   </div>
   </>
  )
}

export default Sidebar;