import React from 'react';
import { trust }from '../data';

import VerifiedIcon from '@mui/icons-material/Verified';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SecurityIcon from '@mui/icons-material/Security';
import { Paper } from '@mui/material';

const Footer = () => {
    console.log(trust)
  return (
    <div style={{width: '90vw', margin: 'auto', marginTop: '4rem'}}>
        <h4 className='font-semibold text-2xl' style={{ color: '#474747'}}>The Tickete promise</h4>
        <div>
          {
            trust.map((item, index) => (
                <Paper>
                    
                </Paper>
            ))
          }
        </div>
    </div>
  )
}

export default Footer;