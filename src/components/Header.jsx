import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagelogo from '../assets/images/page-logo.png';
import Roboimg from '../assets/images/head-robot.png';
import Roboimg2 from '../assets/images/robotimg2.png';
import { Moredropdownicon } from './Iconsvg';
import { Headdots } from './Iconsvg';

const Header = () => {
    const [show, setshow] = useState(true);
    return (
        <div className='bg-header'>
            <Container className='custom_container'>
                <div className='d-flex fix_nav align-items-center justify-content-between py-lg-1 py-2 bg_blue'>
                    <img src={Pagelogo} alt="Pagelogo" className='mw-68 w-100 cur-pointer' />
                    <div className='d-flex align-items-center justify-content-between gap-btn'>
                        <div onClick={() => setshow(!show)} className={`${show ? "cross" : "cross1"} menu-icon`}>
                            <span className='crl-1'></span>
                            <span className='crl-2'></span>
                            <span className='crl-3'></span>
                        </div>
                        <button className='btn-enter1 d-lg-none d-md-block d-none'>Enter App</button>
                        <ul className={`${show ? "left_false" : "left_true"} nav_bar`}>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>About</a></li>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>IBO Event</a></li>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>EEFI Tokenomics</a></li>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>Team</a></li>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>Partners</a></li>
                            <li><a href="" className='ff-raleway fs-2sm fw-medium text-white linehov position-relative'>Roadmap</a></li>
                            <li className='position-relative btn-more'><a href="" className='ff-raleway fs-2sm fw-medium text-white'>More</a>
                                <button className="btn-am ps-2 pb-1">
                                    <Moredropdownicon />
                                </button>
                                <div id="dropcontent" className="dropdown-box">
                                    <a href=""
                                        className="mb-0 ff-raleway fs-2sm fw-normal text_blue d-flex align-items-center justify-content-center">More</a>
                                    <a href=""
                                        className="mb-0 ff-raleway fs-2sm fw-normal text_blue d-flex align-items-center justify-content-center">More</a>
                                    <a href=""
                                        className="mb-0 ff-raleway fs-2sm fw-normal text_blue d-flex align-items-center justify-content-center">More</a>
                                    <a href=""
                                        className="mb-0 ff-raleway fs-2sm fw-normal text_blue d-flex align-items-center justify-content-center">More</a>
                                    <a href=""
                                        className="mb-0 ff-raleway fs-2sm fw-normal text_blue d-flex align-items-center justify-content-center">More</a>
                                </div>
                            </li>
                        </ul>
                        <button className="btn-enter d-lg-block d-none position-relative z-2">Enter App</button>
                    </div>
                </div>
            </Container>
            <Container className='custom_container'>
                <Row className='head-padding'>
                    <Col lg={6} className='d-flex align-items-lg-start align-items-center justify-content-center flex-column'>
                        <h2 className='mb-0 ff-neueuregular fs-2xl fw-medium text-white mw-463 text-uppercase text-center text-lg-start lh-120 pb-4'>Building
                            elastic
                            Protocol</h2>
                        <p className='mb-0 ff-raleway fs-2sm fw-normal text-white mw-521 lh-150 text-capitalize pb-3 text-lg-start text-center'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
                        <a href='' className='mb-0 ff-raleway fs-3sm fw-bold text-white text-decoration-underline'>Audited by Omniscia</a>
                    </Col>
                    <Col lg={6} className='d-flex align-items-lg-start justify-content-lg-end justify-content-center'>
                        <img src={Roboimg2} alt="roboimg2" className='d-lg-none d-block robo-img w-100' />
                        <img src={Roboimg} alt="Roboimg" className='robo-img w-100 d-lg-block d-none' />
                    </Col>
                </Row>
            </Container>
            <div className='position-absolute headdot d-xl-block d-none'>
                <Headdots />
            </div>
        </div>
    )
}

export default Header
