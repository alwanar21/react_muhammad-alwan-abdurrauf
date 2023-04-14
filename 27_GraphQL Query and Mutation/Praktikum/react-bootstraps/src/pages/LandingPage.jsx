import React from 'react'
import heroImg from "../assets/hero-img.png";
import ProductCard from '../components/ProductCard';

export default function LandingPage() {
    return (
        <div className=''>
            {/* hero section */}
            <section className="hero" id="hero">
                <div className="container hero__container">
                    <div className="hero__one">
                        <h1 className="hero__header">Better Solutions For Your Business</h1>
                        <p className="hero__text">
                            We are team of talented designers making websites with Bootstrap
                        </p>
                        <div className="button__cont">
                            <a href="#" className="hero__button button--blue" target="_blank">
                                Get Started
                            </a>
                            <a href="#" className="hero__button button--hover" target="_blank">
                                Watch Video
                            </a>
                        </div>
                    </div>
                    <div className="img__container">
                        <img className="img" src={heroImg} alt="hero__img" />
                    </div>
                </div>
            </section>

            <ProductCard />

            <>
                {/* Footer Section */}
                <footer className="footer" id="footer">
                    {/* Newsletter Section */}
                    <div className="newsletter">
                        <div className="container newsletter__container">
                            <h2 className="newsletter__header">Join Our Newsletter</h2>
                            <p className="newsletter__text">
                                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                            </p>
                            <form className="container__input">
                                <input className="newsletter__input" type="text" />
                                <button className="newsletter__button" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* MainFooter Section */}
                    <div className="mainFooter">
                        <div className="container container__mainFooter">
                            <div className="firstcon">
                                <h3 className="firstcon__logo">ARSHA</h3>
                                <p className="firstcon__address">
                                    A108 Adam Street New York, NY 535022 United States
                                    <br />
                                    <br />
                                    <span>Phone:</span> +1 5589 55488 55
                                    <br />
                                    <span>Email:</span> info@example.com
                                </p>
                            </div>
                            <div className="secondcon">
                                <h5 className="mainfooter__header">Useful Link</h5>
                                <ul className="list__menu">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="thirdcon">
                                <h5 className="mainfooter__header">Our Services</h5>
                                <ul className="list__menu">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#">Product Management</a>
                                    </li>
                                    <li>
                                        <a href="#">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#">Graphic Design</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="fourthcon">
                                <h5 className="mainfooter__header">Our Social Networks</h5>
                                <p className="fourthcon__text">
                                    Cras fermentum odio eu feugiat lide par naso tierra videa magna
                                    derita valies
                                </p>
                                <div className="social__list">
                                    <a className="social__links" href="#" />
                                    <a className="social__links" href="#" />
                                    <a className="social__links" href="#" />
                                    <a className="social__links" href="#" />
                                    <a className="social__links" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Watermark Section */}
                    <div className="watermark">
                        <div className="container watermark__container">
                            <p className="watermark__header">
                                © Copyright <strong>Arsha.</strong> All Rights Reserved
                            </p>
                            <p className="watermark__text">
                                Designed by <span>BootstrapMade</span>{" "}
                            </p>
                        </div>
                    </div>
                </footer>
            </>


        </div>
    )
}
