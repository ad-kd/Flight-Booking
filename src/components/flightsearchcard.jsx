import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const flightsearchcard = () => {
  return (
    <div>
      <Card className='card-design my-4'>
        <Card.Body>
          <div className='row '>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <Card.Subtitle className="mb-2">Where Would you want to go ?</Card.Subtitle>
              <img 
              src={"https://5.imimg.com/data5/SELLER/Default/2022/11/XG/XM/IU/148932685/flights-bookings-500x500.jpg"} 
              alt="Flight-Booking-Img" className='flight-image' />
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" placeholder="Chennai" />
                    </Form.Group>
              
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="text" placeholder="Mumbai" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>

                    <Button variant="success" className='w-100 btn-color' size='lg' type="submit">
                      Search
                    </Button>
                  </Form>
            </div>
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}

export default flightsearchcard