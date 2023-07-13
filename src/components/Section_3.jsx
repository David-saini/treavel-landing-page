import React from 'react'
import rome_img from '../assets/png/rome_img.png'
import london from '../assets/png/London-img.png'
import europe from '../assets/png/full-europe.png'
import navigation_1 from '../assets/png/navigation_1.png'
import semicircle from '../assets/png/semi-circle.png'
import { Col, Container, Row } from 'react-bootstrap'

const Section_3 = () => {
    return (
        <div className='py-lg-5 position-relative overflow-hidden'>
            <Container className='py-5'>
                <div className=' d-flex align-items-center justify-content-center'>
                    <h1 className='mb-0 py-2 fs-18 fc-light poppins w-600' data-aos="zoom-in" data-aos-duration="1000" data-delay="1000">Top Selling</h1>
                </div>
                <div className=' d-flex align-items-center justify-content-center pb-5'>
                    <h1 className='mb-0  fs-50 fc-dark volkhov fc-extra-dark w-700' data-aos="zoom-in" data-aos-duration="1000" data-delay="1000">Top Destinations</h1>
                </div>
                <Row className='py-2'>
                    <Col lg={4} sm={6} xs={12} className='flex_1' data-aos="flip-right" data-aos-duration="1000" data-delay="1000">
                        <div className='destination_card'>
                            <img className='w-100' src={rome_img} alt="" />
                            <div className='d-flex align-items-center justify-content-between px-4 py-3'>
                                <h6 className='fc-light fs-18 poppins w-500 mb-0'>Rome, Italty</h6>
                                <p className='fc-light fs-18 poppins w-500 mb-0'>$5,42k</p>
                            </div>
                            <div className='px-4 d-flex align-items-center gap-2 pb-3'>
                                <img className='pb-2' src={navigation_1} alt="" />
                                <p className='mb-0 fc-light fs-18 poppins w-500 mb-0 pb-2'>10 Days Trip</p>
                            </div>
                        </div>
                    </Col>


                    <Col lg={4} sm={6} xs={12} className='flex_1 pt__5' data-aos="flip-down" data-aos-duration="1000" data-delay="1000">
                        <div className='destination_card'>
                            <img className='w-100' src={london} alt="" />
                            <div className='d-flex align-items-center justify-content-between px-4 py-3'>
                                <h6 className='fc-light fs-18 poppins w-500 mb-0'>London, UK</h6>
                                <p className='fc-light fs-18 poppins w-500 mb-0'>$4.2k</p>
                            </div>
                            <div className='px-4 d-flex align-items-center gap-2 pb-3'>
                                <img className='pb-2' src={navigation_1} alt="" />
                                <p className='mb-0 fc-light fs-18 poppins w-500 mb-0 pb-2'>12 Days Trip</p>
                            </div>
                        </div>
                    </Col>


                    <Col lg={4} sm={6} xs={12} className=' flex pt_5' data-aos="flip-left" data-aos-duration="1000" data-delay="1000">
                        <div className='destination_card position-relative'>
                            <img className='w-100' src={europe} alt="" />
                            <div className='d-flex align-items-center justify-content-between px-4 py-3'>
                                <h6 className='fc-light fs-18 poppins w-500 mb-0'>Full Europe</h6>
                                <p className='fc-light fs-18 poppins w-500 mb-0'>$15k</p>
                            </div>
                            <div className='px-4 d-flex align-items-center gap-2 pb-3'>
                                <img className='pb-2' src={navigation_1} alt="" />
                                <p className='mb-0 fc-light fs-18 poppins w-500 mb-0 pb-2'>28 Days Trip</p>
                            </div>
                            <img className='semicircle_absolute w-96px' data-aos="fade-right" data-aos-duration="2000" data-delay="1000" data-aos-ease="linear" src={semicircle} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section_3