import React from 'react'
import Choose_Destination from '../assets/png/Choose Destination.png'
import Make_Payment from '../assets/png/Make Payment.png'
import Reach_Airport from '../assets/png/Reach_Airport.png'
import box_img from '../assets/png/box_img.png'
import leaf from '../assets/png/LEAF.png'
import map_icon from '../assets/png/map icon.png'
import send from '../assets/png/send.png'
import building from '../assets/png/building.png'
import heart from '../assets/png/heart.png'
import gradient from '../assets/png/radial-gredient.png'
import rome_png from '../assets/png/rome_card_img.png'
import timeline_img from '../assets/png/timeline_img.png'
import { Col, Container, Row } from 'react-bootstrap'

const Section_4 = () => {
    return (
        <div className='py-lg-5 position-relative overflow-hidden'>
            <Container className='pt-5'>
                <Row className='d-flex align-items-center justify-content-between reverse'>
                    <Col lg={6} className="pt-5 pt-lg-0" data-aos="zoom-in" data-aos-duration="1000" data-delay="1000" data-aos-easing="linear" >
                        <p className='fs-18 poppins w-600 fc-light pt-5 pt-lg-0'>Easy and Fast</p>
                        <h1 className='w-700 fs-50 volkhov fc-extra-dark mb-0 max-511px'>Book your next trip
                            in 3 easy steps</h1>
                        <div className='d-flex gap-3 pt-4 max-395px'>
                            <img className='img-3' src={Choose_Destination} alt="" />
                            <div>
                                <p className='mb-0 fc-secondary poppins w-700'>Choose Destination</p>
                                <p className='mb-0 fc-secondary poppins w-400'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>

                        <div className='d-flex gap-3 pt-4 max-395px'>
                            <img className='img-3' src={Make_Payment} alt="" />
                            <div>
                                <p className='mb-0 fc-secondary poppins w-700'>Make Payment</p>
                                <p className='mb-0 fc-secondary poppins w-400'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>

                        <div className='d-flex gap-3 pt-4 max-395px'>
                            <img className='img-3' src={Reach_Airport} alt="" />
                            <div>
                                <p className='mb-0 fc-secondary poppins w-700'>Reach Airport on Selected Date</p>
                                <p className='mb-0 fc-secondary poppins w-400'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="position-relative flex ps-lg-5" data-aos="fade-up" data-aos-duration="1000" data-delay="1000" data-aos-easing="ease-in-sine">
                        <div className='gradient-absolute z_1'>
                            <img className='w-700px ' src={gradient} alt="" />
                        </div>
                        <div className='box position-relative'>
                            <div className='d-flex align-items-center justify-content-center py-3 px-3'>
                                <img className='box_img' src={box_img} alt="" />
                            </div>
                            <h6 className='px-4 poppins w-500 fc-black'>Trip To Greece</h6>
                            <div className='d-flex align-items-center fc-grey w-500 pb-2'>
                                <p className='ps-4 poppins'>14-29 June |</p>
                                <p className='ps-2 poppins'>by Robbin joseph</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 ps-4 pb-4'>
                                <img className='img-4' src={leaf} alt="" />
                                <img className='img-4' src={map_icon} alt="" />
                                <img className='img-4' src={send} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-2 ps-4 pb-4'>
                                    <img className='img-5' src={building} alt="" />
                                    <p className='mb-0 poppins w-500 fc-grey'>24 people going</p>
                                </div>
                                <div className='pe-4 pb-4'>
                                    <img className='w-20px' src={heart} alt="" />
                                </div>
                            </div>

                            <div className='rome_card_absolute'>
                                <div className='rome_card'>
                                    <div className='d-flex gap-3 pt-3'>
                                        <div className='ps-3 pt-1'>
                                            <img className='w_50' src={rome_png} alt="" />
                                        </div>
                                        <div>
                                            <p className='mb-0 fc-grey poppins w-500'>Ongoing</p>
                                            <p className='mb-0 fc-black poppins w-500'>Trip to rome</p>
                                            <p className='mb-0 fc-voilet poppins w-500 pt-1'>40% <span className='fc-black'>completed</span></p>
                                            <img className='w-156px pe-3 pb-3' src={timeline_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Section_4