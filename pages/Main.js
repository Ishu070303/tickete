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
    },

    mainPaper: {
      width: '47vw', 
      marginTop: '1rem', 
      padding: '5px',

      [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        width: '80vw',
        margin: 'auto',
        marginTop: '.5rem'
      }
    }, 

    mainPaperDiv: {
      color: "#474747",
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: '600',
      fontSize: '16px',
    },

    mainPaperIconDiv: {
      width: '11rem',
      marginLeft: '0.25rem',
      display: 'flex',
      justifyContent: 'space-between',
    },

    paperInputDiv: {
      width: '47vw',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1.25rem',

      [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        width: '80vw'

      }
    }, 

    paperTextField: {
      width: '22.7vw', 
      color: '#D6D6D6',
      marginTop: '0.75rem',
      marginBottom: '0.75rem',
      marginRight: '0.5',
      marginLeft: '.25rem',

      [theme.breakpoints.down('md')]: {
        // border: '2px solid black',
        marginTop: 0,
        width: '75vw'

      }
    },

    klarnaDiv: {
      width: '47vw', 
      marginTop: '2rem', 
      padding: '5px',
      
      [theme.breakpoints.down('md')]: {
        width: '80vw',
        margin: 'auto', 
        marginTop: '2rem'
      }
    },

    klarnaPaperDiv: {
      width: '5rem',
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '0.25rem' 
    },

    totalSectionh4 : {
      color: '#474747',
      fontWeight: '600',
      fontSize: "24px",
      marginTop: '2rem',

      [theme.breakpoints.down("md")]: {
        width: "80vw",
        margin: 'auto',
        marginTop: '2rem',
        fontSize: '18px'
      }
    },

    totalSectionpara: {
      color: '#474747', 
      fontSize: '12px',
      fontWeight: '400',
      textDecoration: 'underline',

      [theme.breakpoints.down("md")]: {
        width: "80vw",
        margin: 'auto',
      }
    },

    mainOfferSection : {
      backgroundColor: '#F5F5F5', 
      width: '47vw', 
      marginTop: '2rem', 
      padding: '.6rem',

      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },

    mainOfferSectionDiv: {
      display: 'flex',
      alignItems: 'center'
    },

    mainOfferSectionPara: {
      color: '#474747',
      fontWeight: '600',
      fontSize: '14px',
    },


    mainEndpara: {
      fontWeight: '400', 
      fontSize: '12px', 
      marginTop: '2rem',

      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },

    mainEndButton: {
      color: 'white', 
      backgroundColor: 'black', 
      marginTop: '1rem', 

      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },

    smallscreen: {
      display: 'none',

      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },

    totalSectionh4Copy : {
      color: '#474747',
      fontWeight: '600',
      fontSize: "24px",
      marginTop: '2rem',

      [theme.breakpoints.down("md")]: {
        width: "80vw",
        margin: 'auto',
        marginTop: '2rem',
        fontSize: '18px'
      }
    },

    totalSectionparaCopy: {
      color: '#474747', 
      fontSize: '12px',
      fontWeight: '400',
      textDecoration: 'underline',

      [theme.breakpoints.down("md")]: {
        width: "80vw",
        margin: 'auto',
      }
    },

    mainOfferSectionCopy : {
      backgroundColor: '#F5F5F5', 
      width: '47vw', 
      marginTop: '2rem', 
      padding: '.6rem',

      [theme.breakpoints.down('md')]: {
        width: '80vw', 
        margin: 'auto',
        marginTop: '2rem'
      }
    },

    mainOfferSectionDivCopy: {
      display: 'flex',
      alignItems: 'center'
    },

    mainOfferSectionParaCopy: {
      color: '#474747',
      fontWeight: '600',
      fontSize: '14px',
    },


    mainEndparaCopy: {
      fontWeight: '400', 
      fontSize: '12px', 
      marginTop: '2rem',

      [theme.breakpoints.down('md')]: {
        width: '80vw', 
        margin: 'auto',
        marginTop: '2rem'
      }
    },

    mainEndButtonCopy: {
      color: 'white', 
      backgroundColor: 'black', 
      marginTop: '1rem', 

      [theme.breakpoints.down('md')]: {
        width: '80vw', 
        marginLeft: '2rem',
        marginTop: '1rem',
      }
    },

    CancelDiv: {
      width: '23vw', 
      margin: 'auto', 
      marginTop: '2rem', 
      marginLeft : '4rem',
      display: 'none',
      // border: '1px solid black',
      [theme.breakpoints.down('md')]: {
        display: 'block',
        width: '100vw',
        marginTop: '1rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid gray',
        marginLeft: 0
      }
    },
  
    cancelpaperDiv: {
      backgroundColor: '#F5F5F5', 
      padding: '1rem',
      [theme.breakpoints.down('md')]: {
        width: '80vw',
        margin: 'auto',
        marginTop: '1rem',
      }
  
    },
  
    cancelpaperDivh4: {
      color: '#474747',
      fontWeight: '600',
      fontSize: '14px',
    },
  
    cancelpaperDivpara: {
      color: '#595959',
      fontWeight: '400',
      fontSize: '14px',
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
            <TextField className={classes.paperTextField} id="outlined-required" label="Card Number" defaultValue="43879151420781" />
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
               <CreditCardIcon style={{cursor: 'pointer'}} />
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
    <div className={classes.CancelDiv}>
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