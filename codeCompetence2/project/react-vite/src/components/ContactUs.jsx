import React from 'react'

export default function ContactUs({ handleChange, formInputData, handleSubmit }) {
    return (
        <>
            {/* contact us */}
            <section className="contacUs container">
                <div className="row">
                    <div className="contactUs__info col-6 ">
                        <div className="ContactUs__header">Contact Us</div>
                        <p className="ContactUs__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus adipisci error praesentium voluptates sit suscipit.
                            Expedita maxime reiciendis voluptates corporis asperiores esse,
                            doloribus ea voluptatibus in beatae, facere praesentium neque ex
                            molestias molestiae tempore.
                        </p>
                    </div>
                    <div className="contactUs__form col-5 offset-1">
                        <form action="" >
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="first-name" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="form-control"
                                        placeholder="First name"
                                        aria-label="First name"
                                        name='firstName'
                                        value={formInputData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="last-name" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="form-control"
                                        placeholder="Last name"
                                        aria-label="Last name"
                                        name='lastName'
                                        value={formInputData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name='email'
                                    value={formInputData.email}
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    What can we help?
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    defaultValue={""}
                                    name='message'
                                    value={formInputData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}
