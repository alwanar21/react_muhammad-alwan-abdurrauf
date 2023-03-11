import React from 'react'

export default function ProductList() {
    return (
        <div className="container mt-5 mb-5">
            <h5 className="my-3 mx-auto text-center">List Product</h5>
            <table className="table table-striped col-10">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Image of Product</th>
                        <th scope="col">Product Freshness</th>
                        <th scope="col">Additional Description</th>
                        <th scope="col">Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1,001</th>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>Brand New</td>
                        <td>adipiscing</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">1,002</th>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>Second Hand</td>
                        <td>adipiscing</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">1,003</th>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>Brand New</td>
                        <td>adipiscing</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th scope="row">1,004</th>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>Refushed</td>
                        <td>adipiscing</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <div className="row container mx-auto mb-5 ms-0">
                    <form action="row col-md-8 offset-2  mt-5 mb-3">
                        <input
                            type="text"
                            id="seaarchProductName"
                            className="form-control w-25"
                            placeholder="search by product Name"
                            aria-label="First name"
                        />
                    </form>
                    <div className="border-primary border-2 button-con mt-2 ">
                        <button className="btn btn-primary rounded-0 ">Deletion</button>
                        <button className="btn btn-light border-primary text-primary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
