import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';

const index = () => {
  return (
    <>
    <Header />
    <div className='flex' style={{height: '100vh', width: '90vw', margin: 'auto', marginTop: '3rem'}}>
      <div className='flex-auto' style={{ width: '50vw'}}>
          <Main />
      </div>
      <div className='flex-auto w-12'>
          <Sidebar />
      </div>
    </div>
    </>
  )
}

export default index;