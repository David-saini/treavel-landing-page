import React from 'react'
import facebook from '../assets/png/facebook.png'
import instagram from '../assets/png/instagram.png'
import twitter from '../assets/png/twitter.png'
import playstore from '../assets/png/Google Play.png'
import Apple_Store from '../assets/png/Apple Store.png'
import { Col, Container, Row } from 'react-bootstrap'


const Section_8 = () => {
    return (
        <div className='py-5 overflow-hidden'>
            <Container className="container pt-4">
                <Row className="row d-flex justify-content-between">
                    <Col lg={3} sm={4} data-aos="fade-right" data-aos-duration="1000" data-delay="1000">
                        <h1 className='fs-44 poppins w-500 fc-primary '>Jadoo.</h1>
                        <p className='  fs-13 poppins w-500 max-207 fc-secondary'>Book your trip in minute, get full
                            Control for much longer.
                        </p>
                    </Col>

                    <Col lg={6} sm={8} data-aos="fade-up" data-aos-duration="1000" data-delay="1000">
                        <div className="row pt-3">
                            <div className="col-4">
                                <ul>
                                    <li className='poppins w-700 fs-21 mb-0 pb-3 fc-black'>Company</li>
                                    <li className='fs-18 poppins w-500'><a className='fc-secondary' href="#">About</a></li>
                                    <li className='pt-2 fs-18 poppins w-500'><a className='fc-secondary' href="#">Careers</a></li>
                                    <li className='pt-2 fs-18 poppins w-500'><a className='fc-secondary' href="#">Mobile</a></li>
                                </ul>
                            </div>

                            <div className="col-4">
                                <ul>
                                    <li className='poppins w-700 fs-21 mb-0 pb-3 fc-black'>Contact</li>
                                    <li className='poppins fs-18 w-500'><a className='fc-secondary' href="#">Help/FAQ</a></li>
                                    <li className='pt-2 poppins fs-18 w-500'><a className='fc-secondary' href="#">Press</a></li>
                                    <li className='pt-2 poppins fs-18 w-500'><a className='fc-secondary' href="#">Affilates</a></li>
                                </ul>
                            </div>

                            <div className="col-4">
                                <ul>
                                    <li className='poppins w-700 fs-21 mb-0 pb-3 fc-black'>More</li>
                                    <li className='fs-18 poppins w-500'><a className='fc-secondary' href="#">Airlinefees</a></li>
                                    <li className='pt-2 fs-18 poppins w-500'><a className='fc-secondary' href="#">Airline</a></li>
                                    <li className='pt-2 fs-18 poppins w-500'><a className='fc-secondary' href="#">Low fare tips</a></li>
                                </ul>
                            </div>
                        </div>

                    </Col>

                    <Col lg={3} className='pt-3' data-aos="fade-left" data-aos-duration="1000" data-delay="1000">
                        <img className='w_50' src={facebook} alt="" />
                        <img className='w_50 bg-circle' src={instagram} alt="" />
                        <img className='w_50' src={twitter} alt="" />

                        <p className='pt-3 fc-secondary poppins w-500 fs-20'>Discover our app</p>

                        <div className='d-flex align-items-center gap-2'>
                            <a href="#"> <img className='w-107px' src={playstore} alt="" /></a>
                            <a href="#"> <img className='w-107px' src={Apple_Store} alt="" /></a>
                        </div>
                    </Col>

                </Row>

                <div className='pt-5' data-aos="fade-up" data-aos-duration="1000" data-delay="1000">
                    <p className='pt-5 d-flex align-items-center justify-content-center fs-14 poppins w-500 fc-secondary'>All rights reserved@jadoo.co</p>
                </div>
            </Container>
        </div>
    )
}

export default Section_8