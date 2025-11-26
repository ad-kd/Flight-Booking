import React from 'react'

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="container">
        <div>
          <h3 className='py-3'>AD Flight</h3>

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
      </div>
    </div>
  )
}

export default sidebar