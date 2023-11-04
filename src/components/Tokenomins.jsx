import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Settingsvg } from './Iconsvg';
import { Extraicon } from './Iconsvg';
import { Msgsicon } from './Iconsvg';
import { Shareicon } from './Iconsvg';
import { Sett2icon } from './Iconsvg';

const Tokenomins = () => {
    return (
        <div className='bg-token'>
            <Container className='custom_container'>
                <Row>
                    <Col data-aos="fade-right" lg={6}>
                        <h2 className='mb-0 ff-neueubold fw-bold fs-3lg text-black lh-120 text-capitalize pb-3'>EEFI Tokenomics</h2>
                        <p className='mb-0 ff-raleway fw-normal fs-2sm text-black lh-160 mw-448 pb-4'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                        <button className='btn-view glass_hover mb-5 ff-raleway fw-medium fs-2sm text-white'>View Contract Address</button>
                        <p className='mb-0 ff-neueubold fs-3md fw-bold text-black text-capitalize lh-120 pb-3'>IBO TOKENOMICS</p>
                        <p className='mb-0 ff-raleway fs-3sm fw-bold text-black lh-130 pb-2'>IBO Round 1 Price</p>
                        <p className='mb-0 ff-raleway fs-2sm fw-semibold text_blue lh-130 pb-3'>1 EEFI = $12</p>
                        <p className='mb-0 ff-raleway fs-3sm fw-bold text-black lh-130 pb-2'>IBO Round 2 Price</p>
                        <p className='mb-0 ff-raleway fs-2sm fw-semibold text_blue lh-130 pb-3'>1 EEFI = $18</p>
                        <p className='mb-0 ff-raleway fs-3sm fw-bold text-black lh-130 pb-2'>IBO Round 3 Price</p>
                        <p className='mb-0 ff-raleway fs-2sm fw-semibold text_blue lh-130 pb-3'>1 EEFI = $26</p>
                        <p className='mb-0 ff-raleway fs-3sm fw-bold text-black lh-130 pb-2'>TOTAL SUPPLY</p>
                        <p className='mb-0 ff-raleway fs-2sm fw-semibold text-black lh-130'>170,000</p>
                    </Col>
                    <Col data-aos="fade-left" lg={6} className='pt-lg-0 pt-100'>
                        <div className='d-flex align-items-center gap-3 pb-4'>
                            <div className='cur_pointer icon_hov'>
                                <Settingsvg />
                            </div>
                            <div>
                                <p className='mb-0 ff-neueubold fs-3md fw-bold text-white lh-120 text-capitalize pb-3'>Decentralized Yield</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm text-white op_08 lh-183'>Protocol’s native utility | rewards token</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 pb-4'>
                            <div className='cur_pointer icon_hov'>
                                <Extraicon />
                            </div>
                            <div>
                                <p className='mb-0 ff-neueubold fs-3md fw-bold text-white lh-120 text-capitalize pb-3'>Extra Value</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm text-white op_08 lh-183'>Protocol’s native utility | rewards token</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 pb-4'>
                            <div className='cur_pointer icon_hov'>
                                <Msgsicon />
                            </div>
                            <div>
                                <p className='mb-0 ff-neueubold fs-3md fw-bold text-white lh-120 text-capitalize pb-3'>Smart Index</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm text-white op_08 lh-183 mw-415'>Token can be viewed as an index of all strategy performance on the protocol</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 pb-4'>
                            <div className='cur_pointer icon_hov'>
                                <Shareicon />
                            </div>
                            <div>
                                <p className='mb-0 ff-neueubold fs-3md fw-bold text-white lh-120 text-capitalize pb-3'>Social Coordination (E,E)</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm text-white op_08 lh-183 mw-415'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 pb-4'>
                            <div className='cur_pointer icon_hov'>
                                <Sett2icon />
                            </div>
                            <div>
                                <p className='mb-0 ff-neueubold fs-3md fw-bold text-white lh-120 text-capitalize pb-3'>Expansive Utility Dimensions</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm text-white op_08 lh-183 mw-391'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tokenomins