import React from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';



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
    <h5 className='font-semibold text-2xl mt-6' style={{ color: '#474747'}}>Additional information</h5>
    <p className='text-base mt-1' style={{ color: '#595959'}}>We need a few more details to complete your reservation.</p>

    </>
  )
}

export default Main;