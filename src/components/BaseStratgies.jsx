import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card1 from '../assets/images/card1.png';
import Smimg1 from '../assets/images/sm-img1.png';
import Nftcardimg1 from '../assets/images/nftcardimg1.png';
import Bluecardimg1 from '../assets/images/bluecardimg1.png';
import Bluecardlogoimg1 from '../assets/images/bluecardlogoimg1.png';
import Bluecardlogoimg2 from '../assets/images/bluecardlogoimg2.png';
import Bluecardlogoimg3 from '../assets/images/bluecardlogoimg3.png';
import Bluecardlogoimg4 from '../assets/images/bluecardlogoimg4.png';

const BaseStratgies = () => {
    return (
        <div className='bg-white'>
            <Container className='custom_container'>
                <h2 className='mb-0 ff-neueubold fw-bold fs-3lg text_blue text-capitalize lh-120 text-center mb-3'>Future Use Cases (Strategies)</h2>
                <div className=' d-flex align-items-center justify-content-center'>
                    <p className='mb-0 ff-raleway fs-2sm fw-normal text-black op_08 lh-160 mw-882 text-center'>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>
                </div>
                <Row className='pad-cardsec'>
                    <Col lg={4} md={6} className=''>
                        <div className='card-case position-relative'>
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
                                <div className='round-btn d-flex align-items-center justify-content-between'>
                                    <img src={Nftcardimg1} alt="Nftcardimg1" className='roundimg w-100' />
                                    <p className='mb-0 ff-raleway fs-2sm fw-medium lh-160 text-white'>@NFTs</p>
                                </div>
                            </div>
                            <div className='blue-overlay-card card-case position-absolute top-0 start-0 end-0 d-flex flex-column justify-content-between' >
                                <img src={Bluecardimg1} alt="Bluecardimg1" className='overlay-cardimg w-100 h-100' />
                                <p className='mb-0 ff-neueubold fs-3md fw-bold lh-120 text-white text-capitalize'>REAL YIELD</p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='mb-0 ff-raleway fw-normal fs-2sm lh-160 text-white op_08'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BaseStratgies