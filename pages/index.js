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
    <div className='flex' style={{width: '80vw', margin: 'auto', marginTop: '3rem', borderBottom: '1px solid gray', paddingBottom: '2rem'}}>
      <div className='flex-auto' style={{ width: '30vw', borderRight:'1px solid gray'}}>
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