import React from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, Paper, Button} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SecurityIcon from '@mui/icons-material/Security';

import { makeStyles } from '@mui/styles';

// import Klarna from './assets/Klarna.png';

const useStyles = makeStyles((theme) => ({
    PayText: {
      color: '#474747',
      fontWeight: '600',
      fontSize: '3rem',

      [theme.breakpoints.down('md')]: {
        display: 'none',
      }
    },

    detailsSection : {
      color: '#474747',
      fontWeight: '600',
      fontSize: '1.5rem',
      marginTop: '2.5rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        width: '80vw',
        margin: 'auto',
        marginTop: '2rem'
      }
    },

    detailsSectionpara: {
      color: '#595959',
      marginTop: '0.25rem',
      fontSize: '16px',

      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        width: '80vw',
        margin: 'auto'
      }
    }, 

    inputSection: {
      width: '50vw',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1.25rem',

      [theme.breakpoints.down('md')]:{
        display: 'block',
        // border: '2px solid black',
        width: '80vw',
        margin: 'auto',
        marginTop: '1rem'
      },
    },

    TextField: {
      width: '23vw', 
      color: '#D6D6D6', 
      marginTop: '0.75rem', 
      marginBottom: '0.75rem', 
      marginRight: '0.75rem',

      [theme.breakpoints.down('md')]:{
        width: '80vw'
      }
    }
}));

const Main = () => {
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const classes = useStyles();

  return (
    <>
    {/*===================== MAIN HEADING SECTION FOR BIG SCREENS ========================= */}
    <h4 className={classes.PayText}>
       Confirm and pay
    </h4>

    {/*===================== DETAILS SECTION FOR BIG SCREENS AND SMALL SCREENS ========================= */}
    <h5 className={classes.detailsSection} >Enter your details</h5>
    <p  className={classes.detailsSectionpara} >We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>

    {/*===================== INPUT SECTION FOR BIG SCREENS AND SMALL SCREENS ========================= */}
    <div className={classes.inputSection}>
    <TextField className={classes.TextField} id="outlined-required" label="Full Name" defaultValue="Eshika Rawat" />
    <TextField className={classes.TextField} id="outlined-required" label="Phone Number" defaultValue="+91 9151420781" />
    <TextField className={classes.TextField} id="outlined-required" label="Email" defaultValue="eshikarawat02@gmail.com" />
    <TextField className={classes.TextField} error id="outlined-error-helper-text" label="Confirm Email" helperText="Email is not matching!" defaultValue="eshikarawat90@gmail.com"/>
    </div>

    {/* ====================== ADDITIONAL INFORMATION SECTION FOR BIG AND SMALL SCREENS ======================== */}
    <h5 className={classes.detailsSection} >Additional information</h5>
    <p className={classes.detailsSectionpara} >We need a few more details to complete your reservation.</p>

    <div className={classes.inputSection}>
    <TextField className={classes.TextField} id="outlined-required" label="Full Name" defaultValue="Eshika Rawat" />
      <FormControl className={classes.TextField} >
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
          defaultValue="India"
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="UK">United Kingdom</MenuItem>
          <MenuItem value="russia">Russia</MenuItem>
        </Select>
      </FormControl>
    </div>

    {/* =================== PAYMENT MODE SECTION FOR BIG AND SMALL SCREENS ======================== */}
    <h5 className='font-semibold text-2xl mt-8' style={{ color: '#474747'}}>Select your mode of payment</h5>
    <p className='text-base mt-1' style={{ color: '#595959'}}>Payments with Tickete are secure and encrypted.</p>
    
    <Paper style={{width: '47vw', marginTop: '1rem', padding: '5px'}}>
        <div className='flex justify-between font-semibold text-base' style={{ color: "#474747", }}>
            <div className='flex justify-between ml-1' style={{width: '11rem'}}>
               <CreditCardIcon/>
               <h6>Credit & debit card</h6>
            </div>
            <div>
                <RadioButtonCheckedIcon style={{ cursor: 'pointer'}} />
            </div>
        </div>
        <div className='flex flex-wrap mt-5' style={{ width: '47vw'}}>
            <TextField style={{width: '22.7vw', color: '#D6D6D6'}} className='my-3 mr-2 ml-1'  id="outlined-required" label="Card Holder's Name" defaultValue="Eshika Rawat" />
            <TextField style={{width: '22.7vw', color: '#D6D6D6'}} className='my-3 mr-2'  id="outlined-required" label="Card Number" defaultValue="43879151420781" />
            <TextField style={{width: '22.7vw', color: '#D6D6D6'}} className='my-3 mr-2 ml-1'  id="outlined-required" label="Expiry Date" defaultValue="06/27" />
            <TextField style={{width: '22.7vw', color: '#D6D6D6'}} className='my-3 mr-2'  id="outlined-error-helper-text" label="CW/CVC" defaultValue="***"/>
        </div>
    </Paper>
    <Paper style={{width: '47vw', marginTop: '2rem', padding: '5px'}}>
        <div className='flex justify-between font-semibold text-base' style={{ color: "#474747", }}>
            <div className='flex justify-between ml-1' style={{width: '5rem'}}>
               <CreditCardIcon />
               <h6>Klarna</h6>
            </div>
            <div>
                <RadioButtonUncheckedIcon style={{ cursor: 'pointer'}} />
            </div>
        </div>
    </Paper>

    {/*total Calculation*/}
    <h4 className='font-semibold font-2xl mt-8' style={{ color: '#474747'}}>Total: 20,000</h4>
    <p className='font-normal underline' style={{ color: '#474747', fontSize: '12px'}}>You will pay in Currency '$'</p>

    {/*offer Section*/}
    <Paper style={{ backgroundColor: '#F5F5F5', width: '47vw', marginTop: '2rem', padding: '.6rem'}}>
        <div className='flex items-center '>
            <RadioButtonCheckedIcon className='mr-2'/>
            <p className='font-semibold text-xs' style={{ color: '#474747'}}>Receive travel tips, suggestions and offers in Lucknow by email</p>
        </div>
    </Paper>

    <p style={{fontWeight: '400', fontSize: '12px', marginTop: '2rem'}}>With payment, you agree to the general <span style={{color: '#1733B6'}}>terms and conditions</span> of Tickete & the <span style={{color: '#1733B6'}}>activity provider.</span></p>
    <Button variant="contained" endIcon={<SecurityIcon />} style={{ color: 'white', backgroundColor: 'black', marginTop: '1rem'}}>Confirm and pay</Button>
    </>
  )
}

export default Main;