import React from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, Paper, Button, InputAdornment} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SecurityIcon from '@mui/icons-material/Security';

import useStyles from './style';
import Image from 'next/image';

import Klarana from '../../public/images/Klarna.png';
import Visa from '../../public/images/visalogo.jpg';
import Group from '../../public/images/Group.jpg'

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
    <TextField className={classes.TextField} id="outlined-required" label="Phone Number" defaultValue="+91 9151420781" InputProps={{ startAdornment: (<InputAdornment position='start'><Image src={Group} /></InputAdornment>)}} />
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
    <h5 className={classes.detailsSection} >Select your mode of payment</h5>
    <p className={classes.detailsSectionpara} >Payments with Tickete are secure and encrypted.</p>
    
    <Paper className={classes.mainPaper}>
        <div className={classes.mainPaperDiv}>
            <div className={classes.mainPaperIconDiv}>
               <CreditCardIcon/>
               <h6>Credit & debit card</h6>
            </div>
            <div>
                <RadioButtonCheckedIcon style={{ cursor: 'pointer'}} />
            </div>
        </div>
        <div className={classes.paperInputDiv}>
            <TextField className={classes.paperTextField} id="outlined-required" label="Card Holder's Name" defaultValue="Eshika Rawat" />
            <TextField className={classes.paperTextField} id="outlined-required" label="Card Number" defaultValue="43879151420781" InputProps={{ endAdornment: (<InputAdornment position='end'> <Image src={Visa} /> </InputAdornment>)}} />
            <TextField className={classes.paperTextField} id="outlined-required" label="Expiry Date" defaultValue="06/27" />
            <TextField className={classes.paperTextField} id="outlined-error-helper-text" label="CW/CVC" defaultValue="***"/>
        </div>
    </Paper>

    <div className={classes.smallscreen}>
        {/*==================== TOTAL SECTION IN  SMALL SCREENS ==========================*/}
        <h4 className={classes.totalSectionh4Copy} >Total: 20,000</h4>
        <p className={classes.totalSectionparaCopy} >You will pay in Currency '$'</p>

        {/* ================== OFFER SECTION IN SMALL SCREENS ======================== */}
        <Paper className={classes.mainOfferSectionCopy} >
          <div className={classes.mainOfferSectionDivCopy} >
            <RadioButtonCheckedIcon className='mr-2'/>
            <p className={classes.mainOfferSectionParaCopy} >Receive travel tips, suggestions and offers in Lucknow by email</p>
          </div>
        </Paper>

        {/*========================== END SECTION IN SMALL SCREENS ========================== */}
        <p className={classes.mainEndparaCopy}>With payment, you agree to the general <span style={{color: '#1733B6'}}>terms and conditions</span> of Tickete & the <span style={{color: '#1733B6'}}>activity provider.</span></p>
        <Button variant="contained" endIcon={<SecurityIcon />} className={classes.mainEndButtonCopy}>Confirm and pay</Button>

        {/*========================== CANCEL SECTION IN SMALL SCREENS ========================== */} 
        <div className={classes.CancelDiv}>
          <Paper className={classes.cancelpaperDiv}>
            <h4 className={classes.cancelpaperDivh4}>Free cancellation</h4>
            <p className={classes.cancelpaperDivpara}>Cancel before 22 July for a full refund</p>
          </Paper>
        </div>
    </div>

    <Paper className={classes.klarnaDiv}>
        <div className={classes.mainPaperDiv}>
            <div className={classes.klarnaPaperDiv}>
               <Image src={Klarana} style={{cursor: 'pointer', marginRight: '1rem'}} />
               <h6>Klarna</h6>
            </div>
            <div>
                <RadioButtonUncheckedIcon style={{ cursor: 'pointer'}} />
            </div>
        </div>
    </Paper>

    {/*==================== TOTAL SECTION IN BIG SCREENS ==========================*/}
    <h4 className={classes.totalSectionh4} >Total: 20,000</h4>
    <p className={classes.totalSectionpara} >You will pay in Currency '$'</p>

    {/* ================== OFFER SECTION IN BIG SCREENS ======================== */}
    <Paper className={classes.mainOfferSection} >
        <div className={classes.mainOfferSectionDiv} >
            <RadioButtonCheckedIcon className='mr-2'/>
            <p className={classes.mainOfferSectionPara} >Receive travel tips, suggestions and offers in Lucknow by email</p>
        </div>
    </Paper>

    {/*========================== CANCEL SECTION IN BIG SCREENS ========================== */}  
    <div className={classes.CancelDivCopy}>
      <Paper className={classes.cancelpaperDiv}>
        <h4 className={classes.cancelpaperDivh4}>Free cancellation</h4>
        <p className={classes.cancelpaperDivpara}>Cancel before 22 July for a full refund</p>
      </Paper>
    </div>

    {/*========================== END SECTION IN BIG SCREENS ========================== */}
    <p className={classes.mainEndpara}>With payment, you agree to the general <span style={{color: '#1733B6'}}>terms and conditions</span> of Tickete & the <span style={{color: '#1733B6'}}>activity provider.</span></p>
    <Button variant="contained" endIcon={<SecurityIcon />} className={classes.mainEndButton}>Confirm and pay</Button>
    </>
  )
}

export default Main;