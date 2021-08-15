import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class Testimonials extends Component {

    state = {
        display: false,
        panel: true
    };

    componentDidMount(){
        this.setState({ display: true })
    }

    render() {
        return (
            <section className="testimonials-area ptb-60">
                <div className="container">
                    {this.state.display ? <OwlCarousel
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials">
                            <div className="client-image">
                                {/* <img src={require("../../images/client1.jpg")} alt="image" /> */}
                            </div>
                            <div className="client-info">
                                <h4 style={{ fontSize: '28px' }}>What is Bynintu?</h4>
                                {/* <span>Founder at Brand</span> */}
                            </div>
                            <p style={{ fontSize: '21px' }}>Bynintu is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.</p>
                        </div>

                        <div className="single-testimonials">
                            <div className="client-image">
                            </div>
                            <div className="client-info">
                                <h4 style={{ fontSize: '28px' }}>Strong Support Team</h4>
                            </div>
                            <p style={{ fontSize: '21px' }}>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>


                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;
