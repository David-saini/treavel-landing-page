import React from 'react'
import bullets from '../assets/png/slider-bullets.png';
import Mike_taylor from '../assets/png/Mike taylor.png';
import arrow_1 from '../assets/png/slider_arrow_1.png';
import arrow_2 from '../assets/png/slider_arrow_2.png';
import { Col, Container, Row } from 'react-bootstrap';
const Section_5 = () => {
    return (
        <div className='py-5 overflow-hidden'>
            <div className='py-5  position-relative'>
                <img className='arrow-1' src={arrow_1} alt="" />
                <img className='arrow-2' src={arrow_2} alt="" />
                <Container className='container py-5'>
                    <Row className="d-flex justify-content-between">
                        <Col md={5} data-aos="fade-right" data-aos-duration="1000" data-delay="1000">
                            <p className='mb-0 fs-18 poppins w-600 fc-secondary'>Testimonials</p>
                            <h1 className='mb-0 w-700 volkhov fs-50 fc-extra-dark'>What people say
                                about Us.</h1>
                            <div className='py-5'>
                                <div className='py-3 d-flex align-items-center gap-2' data-aos="fade-right" data-aos-duration="1000" data-delay="1000">
                                    <img className='bullets' src={bullets} alt="" />
                                    <img className='bullets' src={bullets} alt="" />
                                    <img className='bullets' src={bullets} alt="" />
                                </div>
                            </div>
                        </Col>

                        <Col md={6} className="py-2 position-relative" data-aos="zoom-in" data-aos-duration="1000" data-delay="1000">
                            <a href="#"><img className='Mike_taylor_img' src={Mike_taylor} alt="" /></a>
                            <div className="about-us px-4">
                                <p className='mb-0 w-404px px-4 py-3 fc-secondary poppins w-500'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <p className='mb-0 px-4 fc-secondary poppins w-600 fs-18 pb-1'>Mike taylor</p>
                                <p className='mb-0 px-4 fc-secondary poppins w-500 fs-14 pb-4'>Lahore, Pakistan</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Section_5