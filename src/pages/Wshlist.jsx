import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { removefromwhislist } from '../Redux/Wishslice';
import { addTwoCart } from '../Redux/Cardslice';



 
function Wshlist() {
  const userwishlist = useSelector(state => state.wishlistReducer)


  console.log(userwishlist);

  const cart = useSelector(state => state.cartSliceReducer)


  const dispatch = useDispatch()

  const handleCart = (products) => {
    const existingProduct = cart.find(item => item.id == products.id)
    if (existingProduct) {
      alert("product quantity increamented")
      dispatch(addTwoCart(products))
      dispatch(removefromwhislist(products.id))

    } else {
      dispatch(addTwoCart(products))
      dispatch(removefromwhislist(products.id))
    }

  }


  return (

    <>

<div className="container-fluid " style={{marginTop:"150px"}}>
  <Row className="d-flex justify-content-center">
    {
      userwishlist?.length >0?
      userwishlist?.map(wish=>(

        <Col xl={4} lg={4} md={6} sm={12} className="mb-5">
        <Card className="shadow-sm" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={wish.images}
            alt="Product Image"
          />
          <Card.Body>
            <Card.Title className="text-center text-uppercase fw-bold">{wish.title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button onClick={() => dispatch(removefromwhislist(wish?.id))}  className="btn btn-outline-success d-flex align-items-center">
                <i className="fas fa-heart me-2 " style={{color:"red"}}></i>
              </button>
              <button  onClick={()=>handleCart(wish)} className="btn btn-outline-success d-flex align-items-center">
                <i className="fas fa-shopping-cart me-2" style={{color:"green"}}></i>
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
        
      ))
      :
      <div className='text-success'>empty cart list</div>


    }
   
  </Row>
</div>

    

      <Header/>
    </>
  )
}

export default Wshlist
