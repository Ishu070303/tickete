import React from 'react';
import { QuestionIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <>
     <div className='flex justify-between' style={{ width: '80vw', margin: 'auto', marginTop : '1rem'}}>
        <div style={{fontWeight: 'bold', fontSize: '20px' }}>
            tickete
        </div>
        <div style={{color:'#474747', fontSize: '16px'}}>
            <QuestionIcon style={{ cursor : 'pointer', color: '#474747', marginRight: '.2rem'}}/>
            Help
        </div>
    </div>
    </>
  )
}

export default Header;