import React from 'react'
import header_img from '../assets/svg/jadoo-logo.svg'
import drop_down_arrow from '../assets/svg/dropdown-img.svg'
import decore from '../assets/png/Decore.png'
import enjoy_timeline from '../assets/png/enjoy_timeline.png'
import hero_content from '../assets/png/Hero_Content.png'
import paly_button from '../assets/png/Play_button.png'
import { Col, Container, Row } from 'react-bootstrap'
const Header = () => {
    return (
        <div className='relative pb-5 overflow-hidden'>
            <div className='decore_absolute'>
                <img src={decore} alt="" />
            </div>
            <Container>
                <div className='pt-4'>
                    <div className='d-flex justify-content-between pb-4'>
                        <div className='max-650 z-1'>
                            <img src={header_img} alt="" />
                        </div>

                        <label for='iconbox' classname='z-3 d-lg-none'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id='iconbox' hidden className='d-none' />

                        <div className='d-flex align-items-center z-3'>
                            <ul className='d-flex align-items-center gap_60 md-screen'>
                                <li><a href="#" className='fc-dark w-400 fs-17'>Desitnations</a></li>
                                <li><a href="#" className='fc-dark w-400 fs-17'>Hotels</a></li>
                                <li><a href="#" className='fc-dark w-400 fs-17'>Flights</a></li>
                                <li><a href="#" className='fc-dark w-400 fs-17'>Bookings</a></li>
                                <li><a href="#" className='fc-dark w-500 fs-17'>Login</a></li>
                                <li><a href="#" className='fc-dark w-500 fs-17 btn_1'>Sign up</a></li>
                                <li className='d-lg-none d-block gap-3'>
                                    <a href="#" className='fc-dark w-500 fs-17 pe-2'>EN</a>
                                    <a href="#"><img src={drop_down_arrow} alt="" /></a>
                                </li>
                            </ul>
                            <ul className='d-lg-block d-none'>
                                <a href="#" className='fc-dark w-500 fs-17 pe-2'>EN</a>
                                <a href="#"><img src={drop_down_arrow} alt="" /></a>
                            </ul>
                        </div>
                    </div>

                    <Row className='d-flex align-items-center justify-content-center'>

                        <Col lg={6} className='z-1 position-relative' data-aos="fade-right" data-aos-duration="1000" data-delay="1000">
                            <img className='enjoy_absolute' src={enjoy_timeline} alt="" />
                            <p className='poppins fc-orange fs-20 w-700 mb-0'>Best Destinations around the world</p>
                            <h1 className='volkhov w-700 fs-84 fc-primary mb-0 py-3'>Travel, enjoy
                                and live a new
                                and full life</h1>
                            <p className='fs-16 max-477 poppins fc-secondary w-500 mb-0 py-3'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                            <div className='d-sm-flex align-items-sm-center gap-5'>
                                <div className='py-4'>
                                    <p className='btn-2 w-500 fs-18p mb-0'>Find out more</p>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <a href="#"><img className='wh_50' src={paly_button} alt="" /></a>
                                    <a href='#' className='mb-0 poppins w-500 fs-17 fc-light'>Play Demo</a>
                                </div>
                            </div>

                        </Col>

                        <Col lg={6} md={9} className='z-1 ' data-aos="fade-up" data-aos-duration="1000" data-delay="1000">
                            <img className='w-100' src={hero_content} alt="" />
                        </Col>
                    </Row>

                </div>
            </Container>

        </div>
    )
}

export default Header

