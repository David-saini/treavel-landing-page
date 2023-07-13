import React from 'react'
import email_icon from '../assets/png/email-icon.png'
import circles from '../assets/png/circles.png'
import circle from '../assets/png/circle.png'
import send_img from '../assets/png/send_img.png'
import plus_img_2 from '../assets/png/plus-img-2.png'
import { Container } from 'react-bootstrap'

const Section_7 = () => {
    return (
        <div className='position-relative overflow-hidden'>
            <div >
                <img className='plus_img_2_absolute' src={plus_img_2} alt="" />
            </div>
            <Container className='container position-relative py-5'>
                <a href="#"> <img className='w_70px send-absolute' data-aos="zoom-in" data-aos-duration="2000" data-delay="1000" data-aos-ease="linear" src={send_img} alt="" /></a>
                <div className='box-2 position-relative'>
                    <div className='circle-absolute'>
                        <img className='w-390px' src={circles} alt="" />
                    </div>
                    <div className='circle_2_absolute'>
                        <img src={circle} alt="" />
                    </div>

                    <div className='d-flex align-items-center justify-content-center text-center py-5' data-aos="zoom-in" data-aos-duration="1000" data-delay="1000">
                        <h1 className='max-w-880px py-4 poppins w-600 fs-33 fc-secondary px-3'>Subscribe to get information, latest news and other
                            interesting offers about Jadoo</h1>
                    </div>

                    <div className='d-sm-flex gap-3 align-items-center justify-content-center pt-3 pb-5 px-4' data-aos="fade-up" data-aos-duration="2000" data-delay="1000">
                        <div className='email d-flex align-items-center justify-content-center gap-2 mt-5  mb-3'>
                            <img className='w-21px' src={email_icon} alt="email" />
                            <input type="email" name='email' placeholder='Your email' className='email-2 montserrat w-400' />
                        </div>
                        <div className='mt-sm-5 mt-3 mb-3 d-flex justify-content-center'>
                            <button className='open-sans w-600 fs-17 fc-white subscribe'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section_7