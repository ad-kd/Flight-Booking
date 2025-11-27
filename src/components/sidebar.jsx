import React from 'react'

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='d-flex flex-column align-items-center justify-content-between h-100'>
        <div className='w-100'>
          <h5 className='py-3 text-center'>AD Flight</h5>
          <nav className='sidebar-links'>
            <ul>
              <li className='active'><a href="#">Home</a></li>
              <li><a href="#">Ticket</a></li>
              <li><a href="#">Shedule</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Support </a></li>
            </ul>
          </nav>
        </div>

        <nav className='sidebar-links'>
          <ul>
            <li><a href="#">Settings </a></li>
          </ul>
        </nav>


      </div>
    </div>
  )
}

export default sidebar