import React from 'react'
import SideBar from '../components/sidebar.jsx'
import Main from '../components/main.jsx'

const homepage = () => {
  return (
    <div>

      <div className='d-flex gap-3'>
        {/* Sidebar */}
        <SideBar />

        {/* main */}
        <div className='p-3'>
          <Main />
        </div>

      </div>
      {/* filter  */}


    </div>
  )
}

export default homepage