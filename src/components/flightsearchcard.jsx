import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const flightsearchcard = () => {

  const [Userdata, setUserData] = useState({
    from: "",
    to: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...Userdata,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", Userdata);
    // Here you can add further logic to handle the form submission, like making an API call
  }

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
              <Form onSubmit={(e) => handleChange(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" placeholder="Chennai" onChange={handleChange} value={Userdata.from} name='from' />
                    </Form.Group>
              
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="text" placeholder="Mumbai" onChange={handleChange} value={Userdata.to} name='to' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" onChange={handleChange} value={Userdata.date} name='date' />
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