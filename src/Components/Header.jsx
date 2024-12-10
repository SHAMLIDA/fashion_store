import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link, NavLink } from 'react-router';
import { searchproducts } from '../Redux/Product';
import { useDispatch, useSelector } from 'react-redux';
NavLink


function Header({insideHome}) {
  const userWhislist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartSliceReducer)

  console.log(userWhislist.length);
  const dispatch=useDispatch()

 
 
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  shadow-sm  w-100 position-fixed top-0" style={{backgroundColor:"lightgreen" , zIndex:"2"}}>
        <div className="container">
     <Link to={'/'}  className="btn -secondary" style={{color:"darkgreen"}}>
         
     <i className="fas fa-home"></i>
     </Link>
               
          <a className="navbar-brand fw-bold text-light" href="#">Fashion Store</a>

       
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex align-items-center w-100">
            
            {insideHome &&  <form className="d-flex mx-auto w-50">
                <input onChange={e=>{dispatch(searchproducts(e.target.value.toLowerCase()))}}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>}

              
              <div className="d-flex align-items-center ms-auto">
               <NavLink>
                  <Link to={'/wshlist'} className="btn-secondary" style={{color:"red"}} >
                    <i className="fas fa-heart"></i>
                    <a className="navbar-brand fw-bold text-light" href="#"></a>
                  <Badge className='me-3' bg="success">{userWhislist?.length}</Badge>
                  </Link>
               </NavLink>
             
             <NavLink>
                  <Link to={'/card'} className="btn-secondary " style={{color:"green"}}>
                    <i className="fas fa-shopping-cart"></i>
                    <a className="navbar-brand fw-bold text-light" href="#"></a>
                <Badge bg="success">{userCart.length}</Badge>
                  </Link>
             </NavLink>
             
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

