import React from 'react'
import FlightSearchCard from './flightsearchcard.jsx'
import FlightDetailSlider from './flightdetailslider.jsx'

const main = () => {
  return (
    <div className='row'>
      <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
        <FlightSearchCard />

        <div className='my-3'>
          <div className='d-flex align-items-center justify-content-between gap-3'>
            <div>
              <p className='mb-1'>From</p>
              <h4 className='mb-1'>Chennai</h4>
              <p className='mb-1'>MAA</p>
            </div>
            <hr className='flex-fill' style={{borderStyle: 'dashed'}}/>
            <div className='text-end'>
              <p className='mb-1'>To</p>
              <h4 className='mb-1'>Mumbai</h4>
              <p className='mb-1'>Mumbai Airport</p>
            </div>
          </div>
        </div>
        <FlightDetailSlider />
      </div>

    </div>
  )
}

export default main