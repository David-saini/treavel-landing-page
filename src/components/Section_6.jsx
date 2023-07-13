import React from 'react'
import axon from '../assets/png/axon_airline.png'
import jetstar from '../assets/png/jetstar.png'
import expedia from '../assets/png/expedia.png'
import qantas from '../assets/png/qantas.png'
import alitalia from '../assets/png/alitalia.png'
import { Container } from 'react-bootstrap'

const Section_6 = () => {
    return (
        <div className='pb-5 overflow-hidden'>
            <Container className='container pb-5' data-aos="zoom-in" data-aos-duration="1000" data-delay="1000">
                <div className='d-lg-flex align-items-center justify-content-center gap-5 pb-3'>

                    <div className='gap-5 d-sm-flex align-items-center justify-content-center'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <a href="#"><img className='axon' src={axon} alt="" /></a>
                        </div>


                        <div className='d-flex align-items-center justify-content-center pt-4 pt-sm-0'>
                            <a href="#"><img className='jetstar' src={jetstar} alt="" /></a>
                        </div>
                    </div>


                    <div className='gap-5 d-sm-flex align-items-center justify-content-center pt-4 pt-lg-0'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <a href="#"><img className='expedia' src={expedia} alt="" /></a>
                        </div>


                        <div className='d-flex align-items-center justify-content-center pt-4'>
                            <a href="#"><img className='qantas' src={qantas} alt="" /></a>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-center pt-4 pt-lg-0'>
                        <a href="#"><img className='alitalia' src={alitalia} alt="" /></a>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Section_6