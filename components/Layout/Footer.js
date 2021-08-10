import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <p>The Most Famous Brands, Sign Up with Big Discounts. Experience the Special Shopping Difference. Hurry, Don't Miss Opportunities. New season. Up to 80% Discounts. Free Shipping Deal. Secure shopping. Famous Fashion Brands. Big Discounts.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Faq's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Information</h3>

                                <ul className="information-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sizing-guide">
                                            <a>Sizing Guide</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Location: Kattenkruidweg 35 3541RT <br /> Utrecht, Netherlands
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        Call Us: <a href="tel:(+31) 639-339497">(+31) 639-339497</a>
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        Email Us: <a href="mailto:sales@bynintu.com">sales@bynintu.com</a>
                                    </li>
                                    {/* <li>
                                        <i className="fas fa-fax"></i>
                                        Fax: <a href="tel:+123456">+123456</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright &copy; 2021 Bynintu. All Rights Reserved By Bynintu</p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/expresscard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
