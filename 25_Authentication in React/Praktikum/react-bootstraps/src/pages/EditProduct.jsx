import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import BS from '../assets/bootstrap-logo.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct({ props }) {
    const navigate = useNavigate();
    const location = useLocation();
    let { productId } = useParams();
    const data = location.state?.products;
    console.log(data);

    const found = data.find(obj => {
        return obj.id === productId;
    });
    console.log(found);
    const formRef = useRef()
    const ProductNameRef = useRef("")
    const ProductCategoryRef = useRef("")
    const ProductImageRef = useRef("")
    const [Freshness, setFreshness] = useState("")
    const ProductDescRef = useRef("")
    const ProductPriceRef = useRef("")



    const handleSubmit = (event) => {
        event.preventDefault()
        const product = {
            productId: found.productId,
            productName: ProductNameRef.current?.value,
            productCategory: ProductCategoryRef.current?.value,
            productImage: ProductImageRef.current?.value,
            productFreshness: Freshness,
            productDesc: ProductDescRef.current?.value,
            productPrice: ProductPriceRef.current?.value
        }
        const editProduct = async () => {
            try {
                const { data } = await axios.put(`https://642ccaf566a20ec9ce8e7674.mockapi.io/api/products/${productId}`, product)
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        editProduct()
        swal("Good job!", "Product Berhasil diperbaharui", "success")
        formRef.current.reset();
    }

    return (


        <div className="container my-5">
            <button className='btn btn-primary mt-1' onClick={() => navigate('/')}>Back</button>
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

                    <Form.Group controlId="formOption" className="mb-3 col-4" >
                        <Form.Label>Image of Product</Form.Label>
                        <Form.Control type="file" name="productImage" ref={ProductImageRef} />
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
