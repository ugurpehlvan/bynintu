import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../store/actions/actions';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import isEmail from '../utils/isEmail';
import notify from '../utils/notify';

const Login = ({ signIn, user }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const  isEmailValid = isEmail(email);
        if (!isEmailValid) {
            notify('error', 'Please type an valid email');
            return;
        }

        signIn({
            email,
            password
        });
    }, [email,  password]);

    return (
        <>
            <Navbar />

            <Breadcrumb title="Login" />

            <section className="login-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Login</h2>
                                </div>

                                <form className="login-form">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" onChange={handleEmailChange} className="form-control" placeholder="Enter your name" id="name" name="name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" onChange={handlePasswordChange} className="form-control" placeholder="Enter your password" id="password" name="password" />
                                    </div>

                                    <button onClick={handleSubmit} className="btn btn-primary">Login</button>

                                    <Link href="/password-forget">
                                        <a className="forgot-password">Lost your password?</a>
                                    </Link>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> New Customer</h2>
                                </div>

                                <span>Create a Account</span>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                <Link href="/signup">
                                    <a className="btn btn-light">Create A Account</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Facility />

            <Footer />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(
    mapStateToProps,
    { signIn }
)(Login);
