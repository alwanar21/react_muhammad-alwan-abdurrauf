import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body shadow-sm ">
            <div className="container-lg">
                <a className="navbar-brand fs-4 fw-normal" href="#">
                    Simple header
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex gap-3">
                        <a
                            className="nav-link active bg-primary text-white rounded"
                            aria-current="page"
                            href="#"
                        >
                            Home
                        </a>
                        <a className="nav-link text-primary" href="#">
                            Features
                        </a>
                        <a className="nav-link text-primary" href="#">
                            Pricing
                        </a>
                        <a className="nav-link text-primary" href="#">
                            FAQs
                        </a>
                        <a className="nav-link text-primary" href="#">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}
