import React from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, Paper, Button} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SecurityIcon from '@mui/icons-material/Security';

// import Klarna from './assets/Klarna.png';


const Main = () => {
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
    <h4 className='font-semibold text-5xl' style={{ color: '#474747'}}>
       Confirm and pay
    </h4>

    {/*Deatails Section */}
    <h5 className='font-semibold text-2xl mt-10' style={{ color: '#474747'}}>Enter your details</h5>
    <p className='text-base mt-1' style={{ color: '#595959'}}>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>

    <div className='flex flex-wrap mt-5' style={{ width: '50vw'}}>
    <TextField style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3'  id="outlined-required" label="Full Name" defaultValue="Eshika Rawat" />
    <TextField style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3'  id="outlined-required" label="Phone Number" defaultValue="+91 9151420781" />
    <TextField style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3'  id="outlined-required" label="Email" defaultValue="eshikarawat02@gmail.com" />
    <TextField style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3' error id="outlined-error-helper-text" label="Confirm Email" helperText="Email is not matching!" defaultValue="eshikarawat90@gmail.com"/>
    </div>

    {/*Additional Information */}
    <h5 className='font-semibold text-2xl mt-6' style={{ color: '#474747'}}>Additional information</h5>
    <p className='text-base mt-1' style={{ color: '#595959'}}>We need a few more details to complete your reservation.</p>

    <div className='flex flex-wrap mt-5' style={{ width: '50vw'}}>
    <TextField style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3'  id="outlined-required" label="Full Name" defaultValue="Eshika Rawat" />
      <FormControl style={{width: '23vw', color: '#D6D6D6'}} className='my-3 mr-3'>
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

    {/*Payment Mode*/}
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