import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, setSearchValue } from '../src/actions';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products) || [];
    const searchValue = useSelector(state => state.searchValue); // Access the search value from the Redux store

    const handleApprove = (productId) => {
        // Dispatch the action to update the status to "Approved"
        dispatch({ type: 'APPROVE_PRODUCT', payload: productId });
    }

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    const handleSearchChange = (value) => {
        dispatch(setSearchValue(value)); // Dispatch the setSearchValue action
    };

    const handleEdit = (productId) => {
        dispatch({ type: 'MARK_AS_MISSING', payload: productId });
    }

    const orders = [
        {
            supplier: "Supplier A",
            shippingDate: "2023-11-05",
            cost: "$500",
            category: "Electronics",
            department: "IT",
            status: "Processing"
        },
        // Add more orders as needed
    ]

    return (
        <div className=' w-100' style={{ padding: '20px' }}>
            <div className="dashboard-info p-3 w-100 d-flex align-items-center flex-wrap">
                {Object.keys(orders[0]).map((key, index) => {
                    return (
                        <div className="dashboard-item col-lg-2 col-md-4 col-sm-6 mb-3" style={{ margin: '0 10px' }} key={index}>
                            <div className="card w-100">
                                <div className="card-body p-1">
                                    <h5 className="card-title" style={{ fontSize: '16px' }}>
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </h5>
                                    <p className="card-text">{orders[0][key]}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>





            <div className="orders-controls d-flex justify-content-between align-items-center" style={{ padding: '20px' }}>
                <div className="search-container">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup>
                </div>
                <div className="d-flex align-items-center">
                    <Button variant="success" className="add-items-btn">Add Items</Button>
                    <div className="print-icon" style={{ marginLeft: '10px' }}>
                        <FontAwesomeIcon icon={faPrint} />
                    </div>
                </div>
            </div>


            <div style={{ padding: '20px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.productName}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.total}</td>
                                <td>{product.status}</td>
                                <td>
                                    <Button variant="success" onClick={() => handleApprove(product.id)} style={{ padding: '5px 10px', fontSize: '12px', marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Button>
                                    <Button variant="danger" onClick={() => handleEdit(product.id)} style={{ padding: '5px 10px', fontSize: '12px', marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Button>
                                    <Button variant="primary" onClick={() => handleDelete(product.id)} style={{ padding: '5px 10px', fontSize: '12px' }}>
                                        Delete
                                    </Button>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Orders;
