import React from 'react'
import BS from '../assets/bootstrap-logo.png'

export default function ProductForm() {


    return (
        <div className="container my-5">
            <div className="">
                <img
                    className="mx-auto d-block my-5"
                    src={BS}
                    alt="bootstrap--logo"
                />
                <h3 className="mx-auto text-center">Create Product</h3>
                <p className="text-center col-10 fw-light text-secondary offset-1">
                    Below is an example form built entirely with Bootstrap’s formcontrols.Each
                    required form group has a validation state that can be triggered by
                    attempting to submit the form without completing it.
                </p>
                <form
                    className="row col-md-8 offset-2 mx-auto mt-5 needs-validation"
                    noValidate=""
                >
                    <h5 className="mb-3">Detail Product</h5>
                    {/* input text form */}
                    <div className="row mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="validationName" className="form-label">
                                Product name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationName"
                                defaultValue=""
                                required=""
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    {/* dropdown form */}
                    <div className="row mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="validationDropdown" className="form-label">
                                Product Category
                            </label>
                            <select className="form-select" id="validationDropdown" required="">
                                <option selected="" disabled="" value="">
                                    Choose...
                                </option>
                                <option value={1}>firstOption</option>
                                <option value={2}>secondOption</option>
                                <option value={3}>thirdOption</option>
                            </select>
                            <div className="invalid-feedback">Please select an option.</div>
                        </div>
                    </div>
                    {/* file form */}
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="validationFileInput" className="form-label">
                                Image of Product
                            </label>
                            <input
                                type="file"
                                className="form-control border-primary border-2"
                                id="validationFileInput"
                                defaultValue=""
                                required=""
                            />
                            <div className="invalid-feedback">Please choose a file.</div>
                        </div>
                    </div>
                    {/* select form */}
                    <div className="row mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="validationSelect" className="form-label">
                                Product Freshness
                            </label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="New"
                                />
                                <label className="form-check-label" htmlFor="New">
                                    Brand New
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="Second"
                                />
                                <label className="form-check-label" htmlFor="Second">
                                    Second Hand
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="refurbished"
                                />
                                <label className="form-check-label" htmlFor="refurbished">
                                    refurbished
                                </label>
                            </div>
                            <div className="invalid-feedback">Please provide a valid city.</div>
                        </div>
                    </div>
                    {/* text area form */}
                    <div className="mb-5">
                        <label htmlFor="validationTextArea" className="form-label">
                            Additional Description
                        </label>
                        <textarea
                            className="form-control"
                            id="validationTextArea"
                            required=""
                            style={{ height: 100 }}
                            defaultValue={""}
                        />
                        <div className="invalid-feedback">please Add Description</div>
                    </div>
                    {/* number input form */}
                    <div className="mb-5">
                        <label htmlFor="validationNumber" className="form-label">
                            Product Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationNumber"
                            placeholder="$ 1"
                            defaultValue=""
                            required=""
                        />
                        <div className="invalid-feedback">please Add price</div>
                    </div>
                    <div className="col-12">
                        <button
                            className="btn btn-primary  rounded col-10 offset-1 mt-5"
                            type="submit"
                        >
                            Submit form
                        </button>
                    </div>
                </form>

            </div>
        </div>

    )
}
