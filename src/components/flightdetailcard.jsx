import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsThreeDots } from "react-icons/bs";

const flightdetailcard = () => {
  return (
    <div>
      <Card className='mx-2'>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <Card.Title className='text-primary fs-6 mb-0'><time>4:45 PM</time> - <time>1:40 AM</time></Card.Title>
            <span><BsThreeDots className='fs-6'/></span>
          </div>

          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
              <img src="https://img.icons8.com/ios/452/airplane-tail-fin.png" className='rounded-circle' width={50} alt="flight" />
              <div>
                <h6 className='mb-1'>Garuda INA</h6>
                <p className='mb-1 text-success'>AMS . SIN . CGK</p>
              </div>
            </div>
            <div className='text-end'>
              <h5 className='mb-1'>INR 1000</h5>
              <p className='mb-1 text-secondary text-center fs-6'>Price</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default flightdetailcard