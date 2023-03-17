import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import BS from '../assets/bootstrap-logo.png'

export default function ProductForm() {
    const [Language, setLanguage] = useState(true)
    const [ProductName, setProductName] = useState('')
    // const [error, setError] = useState(false)

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

    //hande form submit
    function handleSubmit(e) {
        e.preventDefault();
        if (ProductName.length > 10) {
            console.error("Product Name tidak boleh melebihi 10 karakter")
        }
    }

    //product name validation
    function handleChange(e) {
        console.log(e.target.value);
        setProductName(e.target.value)
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
                        <Form.Control type="text" placeholder="" onChange={handleChange} />
                        {ProductName.length > 10 ? <label className='text-danger mt-1'>Product Name tidak boleh melebihi 10 karakter</label> : ""}

                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="productCategory">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select className="mb-3 " aria-label="Choose..">
                            <option>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formOption" className="mb-3 col-4">
                        <Form.Label>Image of Product</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group controlId="formRadio" className="mb-3">
                        <Form.Label>Product Freshness</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Brand New`}
                                    value={`Brand New`}
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Second Hand`}
                                    value={`Second Hand`}
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Refurbished`}
                                    value={`Refurbished`}
                                />

                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="Number" placeholder="$ 1" />
                    </Form.Group>

                    <button className='btn btn-primary rounded col-10 offset-1' type='submit' onClick={handleSubmit}>Submit</button>

                </Form>
            </div>
        </div >

    )
}
