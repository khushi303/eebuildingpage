import React from 'react';
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alogo from '../assets/images/a-logo.png';
import { Helpic } from './Iconsvg';
import Textimg from '../assets/images/bg-text.png';

const Strategies = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bg_stratgies'>
            <Container className='custom_container'>
                <h2 className='ff-neueubold fs-3lg fw-bold text-white lh-120 text-center mb-0'>Core Strategies</h2>
                <div className='d-flex align-items-center justify-content-center pb-5 pt-4'>
                    <p className='ff-raleway fs-2sm fw-normal text-white op_08 lh-160 text-center mw-819 mb-0'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <Row>
                            <Col lg={6} className='col-12 d-flex align-items-center justify-content-center position-relative'>
                                <div className='card-stratgy position-relative z-2'>
                                    <button className='in_button ff-raleway fw-normal fs-sm text-white'>Innovation</button>
                                    <div className='mt-2 d-flex align-items-center justify-content-center'>
                                        <img src={Alogo} alt="Alogo" className='mw-300 w-100' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_08 mb-0'>Projected Yield (APY)</p>
                                        <p className='ff-inter fs-2sm fw-semibold text_blue4 mb-0'>7,777,777%</p>
                                    </div>
                                    <div className='mt-3 d-flex align-items-center justify-content-between card_borbottom pb-2 position-relative'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_05 mb-0'>Current Deposits</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal lh-150 text-white op_05 mb-0'>Max Capacity</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 z-1 d-flex align-items-center justify-content-center'>
                                    <img src={Textimg} alt="Textimg" className='text-img' />
                                </div>
                            </Col>
                            <Col lg={6} className='col-12 d-flex pt-lg-0 pt-4 align-items-center justify-content-start justify-content-lg-start'>
                                <div className='overflow-y-auto hide_scrollbar'>
                                    <div className='h-300 d-lg-block'>
                                        <h2 className='mb-0 ff-neueregular fs-2lg fw-normal lh-120 text-capitalize text-white pb-3'>Elastic Vault</h2>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white'>Deposit Token <Helpic /></p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr pt-2'>$AMPL</p>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white pt-2 pb-2'>Flagship Hedging Strategy</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                        <ol className='ps-3'>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Initially utilizes both OG rebase tokens $AMPL and $OHM. </li>
                                            <ul className='list-style-disc mb-0 ps-3'>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Deposit $AMPL and receive $EEFI and $OHM rewards;  </li>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).  </li>
                                            </ul>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col lg={6} className='col-12 d-flex align-items-center justify-content-center position-relative'>
                                <div className='card-stratgy position-relative z-2'>
                                    <button className='in_button ff-raleway fw-normal fs-sm text-white'>Innovation</button>
                                    <div className='mt-2 d-flex align-items-center justify-content-center'>
                                        <img src={Alogo} alt="Alogo" className='mw-300 w-100' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_08 mb-0'>Projected Yield (APY)</p>
                                        <p className='ff-inter fs-2sm fw-semibold text_blue4 mb-0'>7,777,777%</p>
                                    </div>
                                    <div className='mt-3 d-flex align-items-center justify-content-between card_borbottom pb-2 position-relative'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_05 mb-0'>Current Deposits</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal lh-150 text-white op_05 mb-0'>Max Capacity</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 z-1 d-flex align-items-center justify-content-center'>
                                    <img src={Textimg} alt="Textimg" className='text-img' />
                                </div>
                            </Col>
                            <Col lg={6} className='col-12 d-flex pt-lg-0 pt-4 align-items-center justify-content-start justify-content-lg-start'>
                                <div className='overflow-y-auto hide_scrollbar'>
                                    <div className='h-300 d-lg-block'>
                                        <h2 className='mb-0 ff-neueregular fs-2lg fw-normal lh-120 text-capitalize text-white pb-3'>Elastic Vault</h2>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white'>Deposit Token <Helpic /></p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr pt-2'>$AMPL</p>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white pt-2 pb-2'>Flagship Hedging Strategy</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                        <ol className='ps-3'>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Initially utilizes both OG rebase tokens $AMPL and $OHM. </li>
                                            <ul className='list-style-disc mb-0 ps-3'>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Deposit $AMPL and receive $EEFI and $OHM rewards;  </li>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).  </li>
                                            </ul>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col lg={6} className='col-12 d-flex align-items-center justify-content-center position-relative'>
                                <div className='card-stratgy position-relative z-2'>
                                    <button className='in_button ff-raleway fw-normal fs-sm text-white'>Innovation</button>
                                    <div className='mt-2 d-flex align-items-center justify-content-center'>
                                        <img src={Alogo} alt="Alogo" className='mw-300 w-100' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_08 mb-0'>Projected Yield (APY)</p>
                                        <p className='ff-inter fs-2sm fw-semibold text_blue4 mb-0'>7,777,777%</p>
                                    </div>
                                    <div className='mt-3 d-flex align-items-center justify-content-between card_borbottom pb-2 position-relative'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_05 mb-0'>Current Deposits</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal lh-150 text-white op_05 mb-0'>Max Capacity</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 z-1 d-flex align-items-center justify-content-center'>
                                    <img src={Textimg} alt="Textimg" className='text-img' />
                                </div>
                            </Col>
                            <Col lg={6} className='col-12 d-flex pt-lg-0 pt-4 align-items-center justify-content-start justify-content-lg-start'>
                                <div className='overflow-y-auto hide_scrollbar'>
                                    <div className='h-300 d-lg-block'>
                                        <h2 className='mb-0 ff-neueregular fs-2lg fw-normal lh-120 text-capitalize text-white pb-3'>Elastic Vault</h2>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white'>Deposit Token <Helpic /></p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr pt-2'>$AMPL</p>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white pt-2 pb-2'>Flagship Hedging Strategy</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                        <ol className='ps-3'>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Initially utilizes both OG rebase tokens $AMPL and $OHM. </li>
                                            <ul className='list-style-disc mb-0 ps-3'>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Deposit $AMPL and receive $EEFI and $OHM rewards;  </li>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).  </li>
                                            </ul>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col lg={6} className='col-12 d-flex align-items-center justify-content-center position-relative'>
                                <div className='card-stratgy position-relative z-2'>
                                    <button className='in_button ff-raleway fw-normal fs-sm text-white'>Innovation</button>
                                    <div className='mt-2 d-flex align-items-center justify-content-center'>
                                        <img src={Alogo} alt="Alogo" className='mw-300 w-100' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_08 mb-0'>Projected Yield (APY)</p>
                                        <p className='ff-inter fs-2sm fw-semibold text_blue4 mb-0'>7,777,777%</p>
                                    </div>
                                    <div className='mt-3 d-flex align-items-center justify-content-between card_borbottom pb-2 position-relative'>
                                        <p className='ff-raleway fs-2sm fw-normal text-white op_05 mb-0'>Current Deposits</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center justify-content-between'>
                                        <p className='ff-raleway fs-2sm fw-normal lh-150 text-white op_05 mb-0'>Max Capacity</p>
                                        <p className='ff-inter fs-2sm fw-medium text-white lh-150 mb-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                                <div className='position-absolute top-0 bottom-0 start-0 end-0 z-1 d-flex align-items-center justify-content-center'>
                                    <img src={Textimg} alt="Textimg" className='text-img' />
                                </div>
                            </Col>
                            <Col lg={6} className='col-12 d-flex pt-lg-0 pt-4 align-items-center justify-content-start justify-content-lg-start'>
                                <div className='overflow-y-auto hide_scrollbar'>
                                    <div className='h-300 d-lg-block'>
                                        <h2 className='mb-0 ff-neueregular fs-2lg fw-normal lh-120 text-capitalize text-white pb-3'>Elastic Vault</h2>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white'>Deposit Token <Helpic /></p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr pt-2'>$AMPL</p>
                                        <p className='mb-0 ff-raleway fs-2md fw-medium lh-160 text-white pt-2 pb-2'>Flagship Hedging Strategy</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                        <ol className='ps-3'>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Initially utilizes both OG rebase tokens $AMPL and $OHM. </li>
                                            <ul className='list-style-disc mb-0 ps-3'>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Deposit $AMPL and receive $EEFI and $OHM rewards;  </li>
                                                <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).  </li>
                                            </ul>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                            <li className='mb-0 ff-raleway fs-2sm fw-normal lh-160 text_grayr mw-422 pb-2'>Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Strategies