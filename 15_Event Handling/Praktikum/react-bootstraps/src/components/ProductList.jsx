import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


export default function ProductList() {
    return (
        <div className="container mt-5 mb-5">
            <h5 className="my-3 mx-auto text-center">List Product</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Image of Product</th>
                        <th>Product Freshness</th>
                        <th>Additional Description</th>
                        <th>Product Fresh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.001</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>dolor</td>
                        <td>BrandNew</td>
                        <td>adipiscing</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1.002</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>dolor</td>
                        <td>Second Hand</td>
                        <td>adipiscing</td>
                        <td>1</td>
                    </tr>

                </tbody>
            </Table>
            <Form action="">
                <Form.Control className='w-50' type="text" placeholder='Search by Product Name' />
                <div className="border-primary border-2 button-con mt-2 ">
                    <button className="btn btn-primary rounded-0 ">Deletion</button>
                    <button className="btn btn-light border-primary text-primary rounded-0">
                        Search
                    </button>
                </div>
            </Form>
        </div>
    )
}
