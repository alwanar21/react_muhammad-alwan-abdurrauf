import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


export default function ProductList({ tableData, handleDelete }) {

    return (
        <div className="container mt-5 mb-5">
            <h5 className="my-3 mx-auto text-center">List Product</h5>
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
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.productName}</td>
                            <td>{data.productCategory}</td>
                            <td>{data.productFreshness}</td>
                            <td>{data.productPrice}</td>
                            <td>
                                <button className='btn btn-danger me-2' onClick={() => handleDelete(index)}>Delete</button>
                                <button className='btn btn-success '>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Form action="">
                <Form.Control className='w-50' type="text" placeholder='Search by Product Name' />
                <div className="border-primary border-2 button-con mt-2 ">
                    <button className="btn btn-primary rounded-0 " >Deletion</button>
                    <button className="btn btn-light border-primary text-primary rounded-0">
                        Search
                    </button>
                </div>
            </Form>
        </div>
    )
}
