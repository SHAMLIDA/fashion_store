import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Product, { fetchproduct } from '../Redux/Product';
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const { allproducts, loading, error } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // You can adjust this value

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allproducts?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(allproducts?.length / productsPerPage);

  return (
    <>
      <Header insideHome={true} />
      <div>
        {loading ? (
          <div style={{ marginTop: "200px" }} className='container-fluid'>
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <div>
            <Row className='d-flex mt-5'>
              {currentProducts?.length > 0 ? (
                currentProducts.map(products => (
                  <Col xl={4} sm={12} md={6} lg={4} className='mb-5' key={products?.id}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={products?.thumbnail} />
                      <Card.Body>
                        <Card.Title className='text-center' style={{ color: "brown" }}>{products.title.slice(0, 15)}...</Card.Title>
                        <div className='text-center fw-bold'>
                          <Link to={`/${products?.id}/View`} style={{ color: "green", textDecoration: "none" }}>View more...</Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <div className='text-center text-success mt-5'>Nothing to display</div>
              )}
            </Row>

            {/* Pagination */}
            <div className="text-center mt-4 mb-3">
              <Button
                variant="outline-success me-2"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Button>

              {/* Display page numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant="outline-success me-2"
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                variant="outline-success"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}

export default Home;
