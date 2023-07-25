import React from 'react'
import Main from './main';
import Sidebar from './sidebar';

const index = () => {
  return (
    <div className='flex'>
      <div className='flex-auto w-64'>
          <Main />
      </div>
      <div className='flex-auto w-32'>
          <Sidebar />
      </div>

    </div>
  )
}

export default index;