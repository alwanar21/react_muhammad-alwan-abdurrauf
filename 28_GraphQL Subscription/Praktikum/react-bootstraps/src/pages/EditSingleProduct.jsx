import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { EDIT_PRODUCT } from '../mutations';

export default function EditSingleProduct({ props }) {
    const navigate = useNavigate();
    let { productId } = useParams();
    console.log({ productId });

    const formRef = useRef()
    const ProductNameRef = useRef("")
    const ProductCategoryRef = useRef("")
    const [Freshness, setFreshness] = useState("")
    const ProductDescRef = useRef("")
    const ProductPriceRef = useRef("")

    //edit single data
    const [editProduct, { loading, error }] = useMutation(EDIT_PRODUCT);
    const handleSubmit = (event) => {
        event.preventDefault()
        editProduct({
            variables: {
                id: productId,
                product_name: ProductNameRef.current?.value,
                product_category: ProductCategoryRef.current?.value,
                product_freshness: Freshness,
                additional_information: ProductDescRef.current?.value,
                price: ProductPriceRef.current?.value,
            },
        }).then(() => {
            console.log('Product edited successfully');
            navigate("/storeManagement")
        }).catch((error) => {
            console.log(error.message);
        });
        formRef.current.reset();
    }




    return (


        <div className="container my-5">
            <button className='btn btn-primary mt-1' onClick={() => navigate(-1)}>Back</button>
            {/* form */}
            <div className='my-5'>
                <h3 className='mb-3'>Edit Products</h3>
                <Form ref={formRef}>
                    <Form.Group className="mb-3 col-6" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="productName" ref={ProductNameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="productCategory">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select className="mb-3 " aria-label="Choose.." name="productCategory" ref={ProductCategoryRef} >
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formRadio" className="mb-3" name="productFreshness" >
                        <Form.Label>Product Freshness</Form.Label>
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Brand New`}
                            value="Brand New"
                            name="productFreshness"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Second Hand`}
                            value="Second Hand"
                            name="productFreshness"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Refurbished`}
                            value="Refurbished"
                            name="productFreshness"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="productDesc" ref={ProductDescRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="Number" placeholder="$ 1" name="productPrice" ref={ProductPriceRef} />
                    </Form.Group>

                    <button className='btn btn-primary rounded col-10 offset-1' type='submit' onClick={handleSubmit}>Submit</button>

                </Form>
            </div>
        </div >

    )
}
