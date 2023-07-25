import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from '@mui/material';
import React from 'react'; 

import data from '../data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddIcon from '@mui/icons-material/Add';
import QuickreplyIcon from '@mui/icons-material/Quickreply';

const Section = () => {
    return (
    <div className='flex' style={{ width: '90vw', margin: 'auto', borderBottom: '1px solid #D6D6D6', padding: '1rem'}}>
        <div className='flex-auto' style={{ width: '50vw'}}>
            <h4 className='font-semibold text-2xl' style={{ color: '#474747', marginTop: '4rem'}}>Frequently asked questions</h4>
            <div className='mt-9'>
            {
               data.map((item, index) => (
                <Accordion className='mt-4 p-1' key={index} style={{width: '50vw'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={{color: '#474747'}}  className='text-lg font-semibold'>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{ color: '#595959'}} className='text-base font-normal' >{item.desc}</Typography>
                </AccordionDetails>
                </Accordion>
               ))
            }
            </div>
        </div>
        <div className='flex-auto w-12'>
            <Paper style={{marginTop: '4rem', backgroundColor: '#FFF7ED', color: '#7F2D0F', height: '10vw'}}>
                <div className='flex justify-between items-center ' style={{width: '18vw',margin:'auto'}}>
                    <div className='mt-5'>
                        <h6 className='font-semibold text-lg'>Need help?</h6>
                        <p className='text-base font-normal'>We're here to help, 24*7</p>
                    </div>
                    <div>
                         <QuickreplyIcon />
                    </div>
                </div>
                <Button className='font-semibold text-base' style={{ border: '1px solid #7F2D0F', color: '#7F2D0F', marginLeft: '1.7rem', marginTop:'2rem'}}  variant='outlined'>Chat with us</Button>
            </Paper>
        </div>
    </div>
  )
}

export default Section;