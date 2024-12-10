import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../Redux/Wishslice';
import { addTwoCart } from '../Redux/Cardslice';

function View() {
  const dispatch=useDispatch()

  const [products,setproduct]=useState({})
  console.log(products);

  const userWhislist=useSelector(state=>state. wishlistReducer)
  console.log(userWhislist);

  const cart=useSelector(state=>state.cartSliceReducer)
    console.log(cart)

  const {id}=useParams()
  console.log(id);
  
  useEffect(()=>{
    if(localStorage.getItem("products")){
      const allproducts=JSON.parse(localStorage.getItem("products"))
      console.log(allproducts);
      setproduct(allproducts.filter(item=>item.id==id)[0])
    console.log(allproducts.filter(item=>item.id==id));
    }
  },[])

  const handleWhishlist=()=>{
    if (userWhislist?.includes(products)) {
      alert("product already added")
    }
    else{
      dispatch(addToWishList(products))
    }
    
  }

  const handleCart=()=>{
    const existingProduct = cart.find(item=>item.id==products.id)
    if(existingProduct){
        alert("product quantity increamented")
        
    }else{
        dispatch(addTwoCart(products))
    }
    
}

  return (
    <> 
      <Header />
      <div className="container mt-5">
        <Row className="align-items-center mb-5">
          {/* Carousel Section */}
          <Col md={6} className="d-flex justify-content-center">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
 src={products?. 
  images
  }                    className="d-block img-fluid rounded"
                    alt="Fashion item 1" width={"350px"} height={"350"}
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
 src={products?. 
  images
  }                    className="d-block img-fluid rounded"
                    alt="Fashion item 2"  width={"350px"} height={"350"}
                  />
                </div>
                <div className="carousel-item">
                  <img
 src={products?. 
  images
  }             
        className="d-block img-fluid rounded"
                    alt="Fashion item 3"  width={"350px"} height={"350"}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={products?. 
                      images
                      }
                    className="d-block img-fluid rounded"
                    alt="Fashion item 4"  width={"350px"} height={"350"}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>

       
<Col md={6} className="text-center text-md-start">

  <h3 className="fw-bold mb-3" style={{color:"lightgray"}}> products id:{products?.id}</h3>
  

  <h3 className="fw-bold mb-3" style={{color:"brown"}}> {products?.title}</h3>
  

  <p className="text-muted mb-3"> {products?.description}</p>
  
  {/* Pricing Section */}
  <div className="d-flex flex-column align-items-center align-items-md-start mb-3">
    <h4 className="text-success fw-bold mb-2"> {products?.
price
}</h4>
    <p className="mb-1">
      <span className="text-decoration-line-through text-muted me-2">₹1,499</span>
      <span className="text-danger fw-bold">(50% off)</span>
    </p>
  </div>
  
  {/* Call-to-Action Buttons */}
  <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
    <button onClick={handleWhishlist}   type="button" className="btn btn-success">
    Add to Wishlist
    </button>
    <button onClick={handleCart}  type="button" className="btn btn-outline-secondary">
      Add to card
    </button>
  </div>
</Col>

        </Row>
      </div>
    </>
  );
}

export default View;
