import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';

const index = () => {
  return (
    <>
    <Header />
    <div className='flex' style={{height: '100vh', width: '90vw', margin: 'auto'}}>
      <div className='flex-auto' style={{ border: '2px solid black', width: '50vw'}}>
          <Main />
      </div>
      <div className='flex-auto w-12' style={{ border: '2px solid black'}}>
          <Sidebar />
      </div>
    </div>
    </>
  )
}

export default index;