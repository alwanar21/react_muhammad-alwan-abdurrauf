import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';
import Table from 'react-bootstrap/Table';
import { DELETE_PRODUCT, GET_PRODUCT } from '../mutations';

export default function StoreManagement() {
    const navigate = useNavigate();

    //delete single product
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    const handleDelete = (id) => {
        deleteProduct({ variables: { id: id } })
            .then(() => {
                console.log('Product deleted');
                window.location.reload()
            }).catch((error) => {
                console.log(error.message);
            });
    }

    //Get All product
    const { loading, error, data } = useQuery(GET_PRODUCT);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data.product);

    return (
        <div className="container mt-5 mb-5">
            <h5 className="my-3 mx-auto text-center">List Product</h5>
            <Link to="/" className='btn btn-primary my-2' >Kembali</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Freshness</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data.product?.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.product_name}</td>
                                <td>{product.product_category}</td>
                                <td>{product.product_freshness}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-danger me-2' onClick={() => handleDelete(product.id)}>Delete</button>
                                    <Link className='btn btn-success ' to={`/editSingleProduct/${product.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}
