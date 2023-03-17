import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Product(props) {
    const navigate = useNavigate();
    const location = useLocation();
    let { productId } = useParams();
    const data = location.state?.tableData;
    console.log(data);

    const found = data.find(obj => {
        return obj.productId === productId;
    });
    console.log(found);


    useEffect(() => {
        console.log(productId);
        // console.log(tableData);



    }, [])


    return (
        <div className='container mx-auto'>
            <button className='btn btn-primary mt-5' onClick={() => navigate('/createProduct')}>Back</button>
            <h3 className="mt-5 mb-3 ">Product Detail</h3>

            <div className="">
                <div className="d-flex">
                    <p className="w-25">Product Name</p>
                    <p className="fw-semibold">: {found ? found.productName : ""}</p>
                </div>
                <div className="d-flex">
                    <p className="w-25">Product Category</p>
                    <p className="fw-semibold">: {found ? found.productCategory : ""}</p>
                </div>
                <div className="d-flex">
                    <p className="w-25">Image of Product</p>
                    <p className="fw-semibold">: {found ? found.productImage : ""}</p>
                </div>
                <div className="d-flex">
                    <p className="w-25">Product Freshness</p>
                    <p className="fw-semibold">: {found ? found.productFreshness : ""}</p>
                </div>
                <div className="d-flex">
                    <p className="w-25">Description</p>
                    <p className="fw-semibold">: {found ? found.productArea : ""}</p>
                </div>
                <div className="d-flex">
                    <p className="w-25">Product Price</p>
                    <p className="fw-semibold">: {found ? found.productPrice : ""}</p>
                </div>
            </div>
        </div>
    )
}
