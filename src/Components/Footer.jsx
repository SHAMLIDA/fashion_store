import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';


function Footer() {
  return (
    <>
      <div className='container-fluid py-2' style={{backgroundColor:"lightgreen"}}>

<Row className='p-5'>

  <Col sm={12} md={4}>
    <h4 className='text-light'><i class="fa fa-shopping-cart" aria-hidden="true" style={{color:"green"}}></i>{' '}Fashion Store</h4>
    <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam dignissimos assumenda nostrum praesentium quasi doloremque dolorem voluptatum perspiciatis
      officiis eveniet rem nemo laborum aliquid distinctio, illum beatae saepe ducimus.</p>
  </Col>

  <Col sm={12} md={2} className='text-center'>
    <h4>links</h4>
    <div className='d-flex flex-column ' >
      <Link to={'/'} style={{ textDecoration: "none",color:'black' }}>Home</Link>
      <Link to={'/wshlist'} style={{ textDecoration: "none" ,color:'black' }}>Whislit</Link>
      <Link to={'/card'} style={{ textDecoration: "none" ,color:'black' }}>Cart</Link>
    </div>
  </Col>
  <Col sm={12} md={2} className='text-center'>
    <h4>Guides</h4>
    <div className='d-flex flex-column'>
      <Link to={'https://react.dev/'} style={{ textDecoration: "none" ,color:'black' }}>React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none" ,color:'black' }}>React Bootstrap</Link>
      <Link to={''} style={{ textDecoration: "none" ,color:'black' }}>Watch Router</Link>
    </div>
  </Col>
  <Col sm={12} md={4}>
    <h4>Contact Us</h4>
    <div className='d-flex'>
      <input type="email" placeholder='Enter your Email ID' className='form-control' />
      <Button variant="success" className='ms-2'>Submit</Button>
    </div>
    <div className='d-flex mt-2 ' style={{color:"green"}}>

      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter ms-3"></i>
      <i class="fa-brands fa-instagram ms-3"></i>
      <i class="fa-brands fa-linkedin ms-3"></i>
      <i class="fa-brands fa-github ms-3"></i>
      <i class="fa-solid fa-phone ms-3"></i>

    </div>
  </Col>


</Row>

<h6 className='text-center'> Fashion Store 2024 @ All Rights Recived</h6>

</div>
    </>
  )
}

export default Footer
