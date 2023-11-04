import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card1 from '../assets/images/webpimg/card1.webp';
import Smimg1 from '../assets/images/webpimg/sm-img1.webp';
import Nftcardimg1 from '../assets/images/webpimg/nftcardimg1.webp';
import Bluecardimg1 from '../assets/images/webpimg/bluecardimg1.webp';
import Bluecardlogoimg1 from '../assets/images/webpimg/bluecardlogoimg1.webp';
import Bluecardlogoimg2 from '../assets/images/webpimg/bluecardlogoimg2.webp';
import Bluecardlogoimg3 from '../assets/images/webpimg/bluecardlogoimg3.webp';
import Bluecardlogoimg4 from '../assets/images/webpimg/bluecardlogoimg4.webp';
import Card2 from '../assets/images/webpimg/card2.webp';
import Card4 from '../assets/images/webpimg/card4.webp';
import Card5 from '../assets/images/webpimg/card5.webp';
import Card6 from '../assets/images/webpimg/card6.webp';
import Card7 from '../assets/images/webpimg/card7.webp';
import Card8 from '../assets/images/webpimg/card8.webp';
import Card9 from '../assets/images/webpimg/card9.webp';
import Smimg2 from '../assets/images/webpimg/sm-img2.webp';
import Smimg4 from '../assets/images/webpimg/sm-img4.webp';
import Smimg5 from '../assets/images/webpimg/sm-img5.webp';
import Smimg6 from '../assets/images/webpimg/sm-img6.webp';
import Smimg7 from '../assets/images/webpimg/sm-img7.webp';
import Smimg8 from '../assets/images/webpimg/sm-img8.webp';
import Smimg9 from '../assets/images/webpimg/sm-img9.webp';

const BaseStratgies = () => {
    return (
        <div className='bg-white case-padding'>
            <Container className='custom_container'>
                <h2 data-aos="fade-down" className='mb-0 ff-neueubold fw-bold fs-3lg text_blue text-capitalize lh-120 text-center mb-3'>Future Use Cases (Strategies)</h2>
                <div className=' d-flex align-items-center justify-content-center'>
                    <p data-aos="fade-right" className='mb-0 ff-raleway fs-2sm fw-normal text-black op_08 lh-160 mw-882 text-center'>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>
                </div>
                <Row className='pad-cardsec justify-content-center'>
                    <Col lg={4} md={6} className=''>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card1} alt="card1" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>NFT</button>
                                <div className='small-box'>
                                    <img src={Smimg1} alt="Smimg1" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>NFT</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@NFTs</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-md-2 gap-sm-3 gap-2'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <div className='d-flex flex-column gap-1'>
                                        <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                        <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-md-1 gap-sm-3 gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-md-0 pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card1} alt="card1" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>NFT</button>
                                <div className='small-box'>
                                    <img src={Smimg1} alt="Smimg1" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>NFT</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@NFTs</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <div className='d-flex flex-column gap-1'>
                                        <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                        <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-lg-0 pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card2} alt="card1" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>OPTIONS</button>
                                <div className='small-box'>
                                    <img src={Smimg2} alt="Smimg2" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>OPTIONS</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@OPTIONS</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card4} alt="card4" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>BONDs</button>
                                <div className='small-box'>
                                    <img src={Smimg4} alt="Smimg4" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>BONDs</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@BONDs</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card5} alt="card5" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>Social Trading</button>
                                <div className='small-box'>
                                    <img src={Smimg5} alt="Smimg5" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>Social Trading</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@Social Trading</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card6} alt="card6" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>PERPS and Delta Neutral</button>
                                <div className='small-box'>
                                    <img src={Smimg6} alt="Smimg6" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>PERPS and Delta Neutral</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@PERPS and Delta Neutral</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card7} alt="card7" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>STABLECOINs</button>
                                <div className='small-box'>
                                    <img src={Smimg7} alt="Smimg7" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>STABLECOINs</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@STABLECOINs</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card8} alt="card8" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>Borrowing and Lending</button>
                                <div className='small-box'>
                                    <img src={Smimg8} alt="Smimg8" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>Borrowing and Lending</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@Borrowing and Lending</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pt-4'>
                        <div className='card-case position-relative overflow-hidden'>
                            <img src={Card9} alt="card9" className='casecardimg w-100 h-100' />
                            <div className='d-flex align-items-start justify-content-between position-absolute start-0 end-0 top-0 p-20'>
                                <button className='btn-nft ff-raleway fs-sm fw-medium lh-160 text-white'>Ai Smart Vaults</button>
                                <div className='small-box'>
                                    <img src={Smimg9} alt="Smimg9" className='small-boximg' />
                                </div>
                            </div>
                            <div className='position-absolute bottom-0 start-0 end-0 p-20'>
                                <p className='mb-0 ff-neueubold fw-bold fs-md text-white text-capitalize lh-120 pb-2'>Ai Smart Vaults</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-medium text-white lh-160 op_08 pb-2'>24 NFTs</p>
                                <div className='round-btn d-inline-flex align-items-center gap-2'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@Ai Smart Vaults</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 d-flex flex-column justify-content-between' >
                                <div>
                                    <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                    <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p className='mb-0 ff-raleway fs-md fw-semibold text-white lh-160'>Platforms: </p>
                                    <Row className=''>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg1} alt="Bluecardlogoimg1" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg2} alt="Bluecardlogoimg2" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg3} alt="Bluecardlogoimg3" className='platformimg w-100' />
                                        </Col>
                                        <Col className='col-3'>
                                            <img src={Bluecardlogoimg4} alt="Bluecardlogoimg4" className='platformimg w-100' />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BaseStratgies