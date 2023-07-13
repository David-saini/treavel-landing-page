import React from 'react'
import group_48 from '../assets/png/Group 48.png'
import plane_img from '../assets/png/card_img_2.png'
import mic_img from '../assets/png/mic.png'
import settings_4 from '../assets/png/settings-img.png'
import plus_img from '../assets/png/plus-img.png'
import { Col, Container, Row } from 'react-bootstrap'


const Section_2 = () => {
    return (
        <div className='pt-5 position-relative overflow-hidden'>
            <img className='position-absolute end-0' src={plus_img} alt="plus_img" />
            <Container className='py-5'>
                <div className='pb-5'>
                    <h1 className='poppins w-600 fs-18 fc-light d-flex align-items-center justify-content-center mb-0' data-aos="fade-down" data-aos-duration="1000" data-delay="1000">CATEGORY</h1>
                    <p className='volkhov fc-extra-dark fs-50 w-700 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-delay="1000">We Offer Best Services</p>
                </div>

                <Row>
                    <Col lg={3} md={4} sm={6} className="col_3 flex_sm col-12 py-3 py-lg-0" data-aos="flip-right" data-aos-duration="1000" data-delay="1000">
                        <div className="card relative">
                            <div className=' d-flex align-items-center justify-content-center pt-4 pb-2'>
                                <img className='img pt-3' src={group_48} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center py-2'>
                                <h1 className='open-sans  mb-0 fs-20 fc-success pt-1 w-600'>Calculated Weather </h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center pt-1 pb-4'>
                                <p className='w-500 max-181 poppins mb-0 text-center px-2 fc-secondary'>Built Wicket longer admire do barton vanity itself do in it.</p>
                            </div>
                            <div className='timeline'></div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className="col_3 flex_sm col-12 py-3 py-lg-0" data-aos="flip-right" data-aos-duration="1000" data-delay="1000">
                        <div className="card  relative">
                            <div className=' d-flex align-items-center justify-content-center'>
                                <img className='img' src={plane_img} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center pb-2'>
                                <h1 className='mb-0 fs-20 open-sans  fc-success w-600'>Best Flights</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center pt-1 pb-4'>
                                <p className='w-500 max-181 poppins mb-0 text-center fc-secondary px-2'>Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                            <div className='timeline'></div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className="col_3 flex_sm col-12 py-3 py-lg-0" data-aos="flip-right" data-aos-duration="1000" data-delay="1000">
                        <div className="card  relative">
                            <div className=' d-flex align-items-center justify-content-center pt-5 pb-2'>
                                <img className='img' src={mic_img} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center py-2'>
                                <h1 className='mb-0 fs-20 fc-success open-sans  w-600'>Local Events</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center pt-1 pb-4'>
                                <p className='w-500 max-181 poppins mb-0 text-center px-2 fc-secondary'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                            </div>
                            <div className='timeline'></div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className="col_3 flex_sm col-12 py-3 py-lg-0" data-aos="flip-right" data-aos-duration="1000" data-delay="1000">
                        <div className="card  relative">
                            <div className=' d-flex align-items-center justify-content-center pt-5 pb-2'>
                                <img className='img' src={settings_4} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center py-2'>
                                <h1 className='mb-0 fs-20 fc-success open-sans pt-3 w-600'>Customization</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center pt-1 pb-4'>
                                <p className='w-500 max-181 poppins mb-0 text-center px-2 fc-secondary'>We deliver outsourced
                                    aviation services for
                                    military customers</p>
                            </div>
                            <div className='timeline'></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section_2