import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Supply = () => {
    return (
        <div className='bg_supply'>
            <Container className='custom_container'>
                <h2 data-aos="fade-down" className='ff-jakarta fs-xl fw-bold text-white text-capitalize text-center lh-120 mb-0'>170k Total Starting Supply</h2>
                <p data-aos="fade-right" className='ff-raleway fs-2sm fw-medium lh-183 text-white text-center mb-0 pt-4'>Initial BONDing Offering (IBO)* Phases</p>
                <div data-aos="fade-up" className='d-flex align-items-center justify-content-center'>
                    <div className='overflow_lg_none overflow_auto pt-60 hide_scrollbar'>
                        <div className='w-900 w_550'>
                            <Row className='border-bottom'>
                                <Col className='col-4 d-flex align-items-center justify-content-start'>
                                    <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>Round 1</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-center'>
                                    <p className='ff-raleway fs-md fw-medium text-white text-uppercase text-nowrap mb-0 lh-183'>10,000 EEFI Bonds</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-end'>
                                    <p className='ff-raleway fs-lg fw-normal text-white text-uppercase mb-0 lh-183'><span className='fs-3sm'>@ </span>$12</p>
                                </Col>
                            </Row>
                            <div className='d-flex align-items-center justify-content-end pt-2 mb-5'>
                                <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>Vested (locked) for 1 Year</p>
                            </div>
                            <Row className='border-bottom'>
                                <Col className='col-4 d-flex align-items-center justify-content-start'>
                                    <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>Round 2</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-center'>
                                    <p className='ff-raleway fs-md fw-medium text-white text-nowrap text-uppercase mb-0 lh-183'>12,777 EEFI Bonds</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-end'>
                                    <p className='ff-raleway fs-lg fw-normal text-white text-uppercase mb-0 lh-183'><span className='fs-3sm'>@ </span>$12</p>
                                </Col>
                            </Row>
                            <div className='d-flex align-items-center justify-content-end pt-2 mb-5'>
                                <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>Vested (locked) for six months</p>
                            </div>
                            <Row className='border-bottom'>
                                <Col className='col-4 d-flex align-items-center justify-content-start'>
                                    <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>Round 3</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-center'>
                                    <p className='ff-raleway fs-md fw-medium text-white text-nowrap text-uppercase mb-0 lh-183'>25,000 EEFI Bonds</p>
                                </Col>
                                <Col className='col-4 d-flex align-items-center justify-content-end'>
                                    <p className='ff-raleway fs-lg fw-normal text-white text-uppercase mb-0 lh-183'><span className='fs-3sm'>@ </span>$26</p>
                                </Col>
                            </Row>
                            <div className='d-flex align-items-center justify-content-end pt-2'>
                                <p className='ff-raleway fs-3sm fw-normal text-white text-uppercase mb-0'>No vesting or lock up periods. Available at launch.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='d-flex align-items-center justify-content-center flex-column pt-100'>
                    <p className='ff-raleway fs-md fw-normal text-white text-decoration-underline lh-183 mb-0'>(47,777 or around<span className='fs-lg'>  28% </span>of total starting supply is up for IBO)</p>
                    <p className='ff-raleway fs-sm fw-normal text-white op_08 lh-130 fv-numaric mb-0 pt-3 mw-521 text-center'>Individuals who hold $EEFI will also receive an airdrop of the protocol's governance token $EFT <span className='fs-1sm'>...learn more</span></p>
                </div>
            </Container>
        </div>
    )
}

export default Supply