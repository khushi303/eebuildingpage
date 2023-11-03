import React from 'react'
import { Container } from 'react-bootstrap';
import Bigcloud from '../assets/images/big-cloud.png';

const Bearman = () => {
    return (
        <div className='bg-bear d-flex align-items-center justify-content-center flex-column position-relative'>
            <Container className='custom_container pt-md-3 pt-sm-4 pt-3'>
                <h2 className='mb-0 ff-jakarta fw-bolder fs-xl text-white lh-120 text-center'>Amplify and <span className='text-uppercase'>stretch gains</span></h2>
            </Container>
            <Container className='custom_container flex-grow-1 d-flex align-items-md-center align-items-end justify-content-center pb-5'>
                <p className='mb-0 ff-raleway fs-sm fw-normal text-white lh-160 mw-554 text-center mb-md-0 mb-sm-5 mb-4'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
            </Container>
            <img src={Bigcloud} alt="big-cloud" className='big-cloud position-absolute w-100' />
        </div>
    )
}

export default Bearman