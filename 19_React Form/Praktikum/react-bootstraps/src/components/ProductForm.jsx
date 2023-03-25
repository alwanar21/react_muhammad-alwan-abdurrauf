import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import BS from '../assets/bootstrap-logo.png'

export default function ProductForm({ addData }) {
    const [Language, setLanguage] = useState(true)
    const productNameRef = useRef("")
    const productCategoryRef = useRef("")
    const [productImage, setproductImage] = useState("")
    const [Freshness, setFreshness] = useState("")
    const productAreaRef = useRef("")
    const productPriceRef = useRef(null)
    const formRef = useRef();

    const [errors, setErrors] = useState(
        {
            productName: '',
            productCategory: '',
            productImage: '',
            productFreshness: '',
            productArea: '',
            productPrice: ''
        }
    )


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
    // convert image input to base64
    function convert2Base64(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            setproductImage(reader.result.toString())
        }

        reader.readAsDataURL(file)
    }

    //handle validation submitting form
    function handleSubmit(e) {
        e.preventDefault()
        const productNameValue = productNameRef.current.value
        const productCategoryValue = productCategoryRef.current.value
        const productImageValue = productImage
        const productFreshnessValue = Freshness
        const productAreaValue = productAreaRef.current.value
        const productPriceValue = productPriceRef.current.value
        // validation
        let error = {}
        let regex = /^[a-zA-Z]+(([ ][a-zA-Z])?[a-zA-Z]*)*$/

        // Product name validation
        if (productNameValue == "" || productNameValue == null) {
            error.productName = "Product Name harus diisi"
        } else if (!regex.test(productNameValue)) {
            error.productName = "product name tidak boleh mengandung karakter"
        }

        // Product Category validation
        if (productCategoryValue == "" || productCategoryValue == null) {
            error.productCategory = "Product Category harus diisi"
        }

        // Product image validation
        if (productImageValue == "" || productImageValue == null) {
            error.productImage = "Product Image harus dilampirkan"
        }

        // Product Freshness validation
        if (productFreshnessValue == "" || productFreshnessValue == null) {
            error.productFreshness = "Product Freshness harus diisi"
        }

        // Product Area validation
        if (productAreaValue == "" || productAreaValue == null) {
            error.productArea = "Product Description harus diisi"
        }

        // Product name validation
        if (productPriceValue == "" || productPriceValue == null) {
            error.productPrice = "Product Price harus diisi"
        }
        console.log("error yang dikumpulkan :")
        console.log(error)
        setErrors(error)


        if (Object.keys(error).length === 0) {
            addData(productNameValue, productCategoryValue, productImageValue, productFreshnessValue, productAreaValue, productPriceValue)
            //cleaning form
            formRef.current.reset();
            setproductImage("")
            setFreshness("")
        }
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
            <div className='my-5' >
                <h3 className='mb-3'>Detail Product</h3>
                <Form ref={formRef}>
                    <Form.Group className="mb-3 col-6" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            ref={productNameRef}
                            name="productName"
                        />
                        {errors.productName && <div className='text-danger'>{errors.productName}</div>}
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="productCategory">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select
                            className="mb-3 "
                            aria-label="Choose.."
                            ref={productCategoryRef}
                            name="productCategory">
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        {errors.productCategory && <div className='text-danger'>{errors.productCategory}</div>}
                    </Form.Group>

                    <Form.Group controlId="formOption" className="mb-3 col-4">
                        <Form.Label>Image of Product</Form.Label>
                        <Form.Control
                            type="file"
                            // ref={productImageRef}
                            onChange={(e) => convert2Base64(e)}
                            name="productImage"
                            accept="image/x-png,image/gif,image/jpeg" />
                        {errors.productImage && <div className='text-danger'>{errors.productImage}</div>}
                    </Form.Group>

                    <Form.Group controlId="formRadio" className="mb-3" name="productFreshness" >
                        <Form.Label>Product Freshness</Form.Label>
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Brand New`}
                            name="productFreshness"
                            value="Brand New"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Second Hand`}
                            name="productFreshness"
                            value="Second Hand"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            id={`default-radio`}
                            label={`Refurbished`}
                            name="productFreshness"
                            value="Refurbished"
                            onChange={(e) => setFreshness(e.target.value)}
                        />
                        {errors.productFreshness && <div className='text-danger'>{errors.productFreshness}</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            ref={productAreaRef}
                            name="productArea" />
                        {errors.productArea && <div className='text-danger'>{errors.productArea}</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder="$ 1"
                            ref={productPriceRef}
                            name="productPrice" />
                        {errors.productPrice && <div className='text-danger'>{errors.productPrice}</div>}
                    </Form.Group>

                    <button className='btn btn-primary rounded col-10 offset-1' type='submit' onClick={handleSubmit}>Submit</button>

                </Form>
            </div>
        </div >

    )
}
