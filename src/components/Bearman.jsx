import React from 'react'
import { Container } from 'react-bootstrap';
import Bigcloud from '../assets/images/webpimg/big-cloud.webp';

const Bearman = () => {
    return (
        <div className='bg-black'>
            <Container className='custom_container'>
                <h2 data-aos="fade-down" className='mb-0 ff-jakarta fw-bolder fs-xl text-white lh-120 text-center py-4'>Amplify and <span className='text-uppercase'>stretch gains</span></h2>
            </Container>
            <div className='bg-bear d-flex align-items-center justify-content-md-center justify-content-end flex-column position-relative'>
                <div className='bg_black1'>
                    <Container className='custom_container d-flex justify-content-center pb-md-0 mb-md-0 pt-md-0 pb-sm-5 pb-3 mb-sm-0 mb-3 pt-4'>
                        <p data-aos="fade-up" className='mb-0 ff-raleway fs-sm fw-normal text-white lh-160 mw-554 text-center'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
                    </Container>
                    <img src={Bigcloud} alt="big-cloud" className='big-cloud position-absolute w-100' />
                </div>
            </div>
        </div>
    )
}

export default Bearman