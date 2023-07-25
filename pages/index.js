import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const index = () => {
  return (
    <>
    <Header />
    <div className='flex' style={{width: '90vw', margin: 'auto', marginTop: '3rem', borderBottom: '1px solid gray', paddingBottom: '1rem'}}>
      <div className='flex-auto' style={{ width: '50vw'}}>
          <Main />
      </div>
      <div className='flex-auto w-12'>
          <Sidebar />
      </div>
    </div>
    <Section />
    <Footer />
    </>
  )
}

export default index;