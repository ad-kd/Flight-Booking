import React from 'react'

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="container">
        <div>
          <h3 className='py-3'>AD Flight</h3>

          <nav className='sidebar-links'>
            <ul>
              <li>Home</li>
              <li>Ticket</li>
              <li>Shedule</li>
              <li>History</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default sidebar