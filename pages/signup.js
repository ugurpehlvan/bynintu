import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';

// actions
import { signUp } from 'store/actions/actions';

// helpers
import isEmail from 'utils/isEmail';
import notify from 'utils/notify';

const Signup = ({signUp, user}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        console.log('asdasda');
        e.preventDefault();
        const isEmailValid = isEmail(email);
        console.log('2');
        if (!isEmailValid) {
            notify('error', 'Please type an valid email');
            return;
        }
        console.log('3');
        signUp({
            email,
            password
        });
    }, [email, password]);
    console.log('user', user);
    return (
        <>
            <Navbar />

            <Breadcrumb title="Signup" />

            <section className="signup-area ptb-60">
                <div className="container">
                    <div className="signup-content">
                        <div className="section-title">
                            <h2><span className="dot"></span> Create an Account</h2>
                        </div>

                        <form className="signup-form">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" onChange={handleEmailChange} className="form-control" placeholder="Enter your email" id="name" name="email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" onChange={handlePasswordChange} className="form-control" placeholder="Enter your password" id="password" name="password" />
                            </div>

                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Signup</button>
                            <Link href="/">
                                <a className="return-store">or Return to Store</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>

            <Facility />

            <Footer />
        </>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(
    mapStateToProps,
    { signUp }
)(Signup);