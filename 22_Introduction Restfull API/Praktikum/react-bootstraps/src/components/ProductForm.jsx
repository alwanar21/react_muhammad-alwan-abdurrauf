import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import BS from '../assets/bootstrap-logo.png'

export default function ProductForm({ handleChange, formInputData, handleSubmit }) {
    const [Language, setLanguage] = useState(true)
    const [ProductName, setProductName] = useState('')

    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account"
        },
        description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    };

    // Change language in article 
    function changeLanguage() {
        setLanguage(!Language)
    }

    // show random number in log
    function getRandomNumber() {
        let randNum = Math.floor(Math.random() * (1000));
        return console.log(randNum);;
    }



    return (
        <div className="container my-5">

            {/* article */}
            <div className="text-center">
                <img
                    className="mx-auto d-block my-5"
                    src={BS}
                    alt="bootstrap--logo"
                />
                <h3 className="mx-auto">{Language ? article.title.en : article.title.id}</h3>
                <p className=" col-10 fw-light text-secondary offset-1">
                    {Language ? article.description.en : article.description.id}
                </p>
                <div className='d-flex justify-content-center gap-2'>
                    <button className='btn btn-primary ' onClick={changeLanguage}>{Language ? "Indonesia" : "English"}</button>
                    <button className='btn btn-secondary ' onClick={getRandomNumber}>Random Number</button>
                </div>
            </div>

            {/* form */}
            <div className='my-5'>
                <h3 className='mb-3'>Detail Product</h3>
                <Form>
                    <Form.Group className="mb-3 col-6" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={handleChange} value={formInputData.productName} name="productName" />
                        {ProductName.length > 10 ? <label className='text-danger mt-1'>Product Name tidak boleh melebihi 10 karakter</label> : ""}

                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="productCategory">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select className="mb-3 " aria-label="Choose.." onChange={handleChange} value={formInputData.productCategory} name="productCategory">
                            <option>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formOption" className="mb-3 col-4">
                        <Form.Label>Image of Product</Form.Label>
                        <Form.Control type="file" onChange={handleChange} name="productImage" />
                    </Form.Group>

                    <Form.Group controlId="formRadio" className="mb-3" name="productFreshness" >
                        <Form.Label>Product Freshness</Form.Label>
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Brand New`}
                            value="Brand New"
                            name="productFreshness"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Second Hand`}
                            value="Second Hand"
                            name="productFreshness"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Refurbished`}
                            value="Refurbished"
                            name="productFreshness"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleChange} value={formInputData.productDesc} name="productDesc" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="Number" placeholder="$ 1" onChange={handleChange} value={formInputData.productPrice} name="productPrice" />
                    </Form.Group>

                    <button className='btn btn-primary rounded col-10 offset-1' type='submit' onClick={handleSubmit}>Submit</button>

                </Form>
            </div>
        </div >

    )
}
