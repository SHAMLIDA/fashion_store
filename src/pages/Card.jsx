import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Redux/Product';
import { emptycart, indecrement, inquantity, removeCartItem } from '../Redux/Cardslice';
import { Link, useNavigate } from 'react-router';


function Card() {
  const cart = useSelector(state => state.cartSliceReducer);
  const navigate=useNavigate ()


  const [totalcarditem,setTotalcarditem]=useState('')
  const [totalcardamount,setTotalcardamount]=useState('')
  console.log(totalcardamount);

  useEffect(()=>{
    if(cart?.length>0){
      setTotalcarditem(cart.length)
      setTotalcardamount(cart.map(pro => pro.totalPrice).reduce((t1, t2) => t1 + t2));
    }

  },[cart])



  const dispatch=useDispatch()


  const handledecrement=(product)=>{
    if(product.quantity>1){
      dispatch(indecrement(product.id))
    }
    else{
      dispatch(removeCartItem(product.id))
    }
  }
   const checkout=()=>{
    dispatch(emptycart())
    alert("you are order sucssefully ")
    navigate('/')

   }

  // console.log('cart')
  // console.log(cart)
  return (
    <>
      <div className='container' style={{ marginTop: "150px" }}>
        <Row>
          <h2 style={{color:'green'}}>Cart Summary</h2>
          {
                cart?.length > 0 ?



          <Col md={8} sm={12}>

           

              <Table responsive striped="columns" hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                cart?.map((product,index )=> (
                  <tr key={product.id}>
                    <td>{index}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                      src={product.images}
                        alt="Product"
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <button onClick={()=>dispatch(inquantity(product.id))}   className='bg-light text-dark me-2' style={{width:"30px",height:"30px"}}>+</button>
                      <input className='border border-white me-2 rounded' type="text" readOnly value={product.quantity} style={{width:"30px",height:"30px"}}/>
                      <button onClick={()=>dispatch(handledecrement(product))}  className='bg-light text-dark  me-2' style={{width:"30px",height:"30px"}}>-</button>
                    </td>
                    <td>{product.totalPrice}</td>
                    <td>
                    <button style={{border:"none"}} onClick={()=>dispatch(removeCartItem(product.id))}>  <i className="fa-solid fa-trash" style={{ color: "red",textDecoration:"none" }} title="Remove Item"></i></button>
                    </td>
                  </tr>

                  ))
                }
               
              </tbody>
            </Table>
            
            <div className='d-flex justify-content-center  mt-5 mb-3 me-3'>
            <Button  onClick={() => dispatch(emptycart())} className='me-3' style={{backgroundColor:"red"}}>Empty Cart</Button>
          <Button style={{backgroundColor:"green",textDecoration: "none"}}>  <Link to={'/'}  style={{color:"white",textDecoration: "none"}}>Shop More</Link></Button>
          </div>
       
    
    </Col>
            
            :
            <h3>empty cart</h3>
           
              }
           
             
       
          <Col md={4} sm={12} className="mt-3">
            <div className='border shadow p-4 rounded bg-light'>
              <h3>Total Items: <span style={{ color: "red" }}>{totalcarditem}</span></h3>
              <h3>Total Amount: {totalcardamount}</h3>
              <Button onClick={checkout} style={{backgroundColor:"darkgreen"}} className="mt-3 w-100">Check Out</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default Card;
