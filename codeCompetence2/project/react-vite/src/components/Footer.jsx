import React from 'react'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import linkedIn from '../assets/linkedIn.svg'
import call from '../assets/add_ic_call.svg'

export default function Footer() {
    return (
        <>
            {/* footer */}
            <footer className="footer">
                <div className="footer__top ">
                    <div className="footer__container flex__footer">
                        <div className="top__left">
                            <a href="#" className="top__logo">
                                alwanar.
                            </a>
                            <p className="top__desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem ex, saepe eaque incidunt tempore dicta .
                            </p>
                            <ul className="social__media">
                                <li>
                                    <a href="https://www.instagram.com/alwanar21/ " target="_blank">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/muhammadalwanabdurrauf/"
                                        target="_blank"
                                    >
                                        <img src={linkedIn} alt="linked In" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="top__right">
                            <div className="container__right">
                                <div className="right__info">
                                    <h5 className="info__header">Address</h5>
                                    <p className="info__desc">
                                        Level 1, 12 Sample St, Sydney NSW 2000
                                    </p>
                                </div>
                                <div className="right__info">
                                    <h5 className="info__header">Contact</h5>
                                    <div className="info__flex">
                                        <img src={call} alt="call" />
                                        <p className="Contact__number">(+62) 555-0117</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__container">
                            <label htmlFor="" className="bottom__wm">
                                ©2023, All right reserved.
                            </label>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
