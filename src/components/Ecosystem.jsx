import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Ecoimg1 from '../assets/images/webpimg/Eco-img1.webp';
import Ecoimg2 from '../assets/images/webpimg/eco-img2.webp';
import Ecoimg3 from '../assets/images/webpimg/eco-img3.webp';
import Ecoimg4 from '../assets/images/webpimg/eco-img4.webp';
import Ecoimg5 from '../assets/images/webpimg/eco-img5.webp';
import Ecoimg6 from '../assets/images/webpimg/eco-img6.webp';

const Ecosystem = () => {
    return (
        <div className='ecosec_pad pt_160'>
            <Container className='custom_container'>
                <h2 data-aos="fade-down" className='ff-neueubold fs-3lg fw-bold lh-120 text-capitalize text-center text_blue'>Ecosystem Partners</h2>
                <Row className='pad_eco'>
                    <Col data-aos="fade-right" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg1} alt="ecoimg1" className='mw-238 w-100' />
                        </div>
                    </Col>
                    <Col data-aos="fade-right" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg2} alt="ecoimg2" className='mw-230 w-100' />
                        </div>
                    </Col>
                    <Col data-aos="fade-right" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg3} alt="ecoimg3" className='mw-148 w-100' />
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg4} alt="ecoimg4" className='mw-210 w-100' />
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg5} alt="ecoimg5" className='mw-195 w-100' />
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg={4} md={6} className='pb-4'>
                        <div className='eco_bg glass_hover d-flex align-items-center justify-content-center'>
                            <img src={Ecoimg6} alt="ecoimg6" className='mw-198 w-100' />
                        </div>
                    </Col>
                </Row>
                <div className='d-flex align-items-center justify-content-center'>
                    <button className='btn_more ff-raleway fs-2sm fw-semibold text_blue text-center'>More To Be Announced</button>
                </div>
            </Container>
        </div>
    )
}

export default Ecosystem