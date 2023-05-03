import React, { useEffect, useState } from 'react'
import { deleteproduct, productList, searchProduct, singleproduct, updateproduct } from '../Services/AdminServices';

import Table from 'react-bootstrap/Table';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';


function ProductList() {

  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const [val, setval] = useState({
    _id: "",
    name: "",
    price: "",
    category: "",
    company: ""
  })

  // This function print product list
  const getProducts = async () => {

    let result: any = await productList();
    setProducts(result.data);
  }

  useEffect(() => {
    getProducts();
  }, [open])

  //This function delete single product
  const deleteProduct = async (id: any) => {
    let result = await deleteproduct(id);
    if (result) {
      alert("Record is deleted");
      getProducts();
    }

  }

  //This function print single user
  const getsingleProduct = async (id: any) => {
    let result = await singleproduct(id);
    setval(result.data)
    setOpen(true)

  }


  const submitHandler = async (e: any) => {
    e.preventDefault();
    let data = new FormData(e.target);

    let formData = {
      name: data.get("name"),
      price: data.get("price"),
      category: data.get("category"),
      company: data.get("company")
    };

    const result = await updateproduct(val._id, formData);
    if (result) {

      setOpen(false);
    }

  }
  const searchHandle = async (event: any) => {
    let key = event.target.value;
    if (key) {
      let result: any = await searchProduct(key);

      if (result) {

        setProducts(result.data);
      }
    }
    else {
      getProducts();
    }
  }
  return (

    <>
      <h1 className='container'>Product list</h1>
      <div className="  align-items-center my-2 container">

        <div className="col-auto">
          <input type="text" id="inputPassword6" className="form-control" placeholder='Search product' onChange={searchHandle} />
        </div>

      </div>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>S. No</th>
            <th> Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length>0 ? products.map((product: any, index) => {

            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td> $ {product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.company}</td>
                  <td><button onClick={() => deleteProduct(product._id)} type="button" className="btn btn-danger  ">Delete</button></td>
                  <td><button onClick={() => { getsingleProduct(product._id) }} type="button" className="btn btn-primary  ">Update</button></td>

                </tr>

              </>
            )
          }): <h2>No result found</h2>}
        </tbody>

      </Table>

      <Modal isOpen={open} size='md' toggle={() => setOpen(!open)} >
        <ModalHeader >Update details</ModalHeader>

        <ModalBody>

          <form onSubmit={submitHandler}>
            <Row className='mt-2'>
              <Col>Product Name </Col>
              <Col><input type="text" name="name" className='form-control' defaultValue={val.name} /></Col>
            </Row>

            <Row className='mt-2'>
              <Col>Price</Col>
              <Col><input type="text" name="price" className='form-control' defaultValue={val.price} /></Col>
            </Row>

            <Row className='mt-2'>
              <Col>Category</Col>
              <Col><input type="text" name="category" className='form-control' defaultValue={val.category} /></Col>
            </Row>

            <Row className='mt-2'>
              <Col>Company</Col>
              <Col><input type="text" name="company" className='form-control' defaultValue={val.company} /></Col>
            </Row>

            <Row className='mt-4'>
              <Col lg={12} className="row">
                <div className='d-flex justify-content-end'>
                  <button type="button" onClick={() => { setOpen(false) }} className="col-md-3 ms-2 btn btn-danger"  >Cancel</button>
                  <button type='submit' className="col-md-3 ms-2 btn btn-primary">Update</button>

                </div>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>

    </>
  )
}

export default ProductList