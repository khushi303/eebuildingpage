import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Teamimg1 from '../assets/images/teamimg1.png';
import Teamimg2 from '../assets/images/teamimg2.png';
import Teamimg3 from '../assets/images/teamimg3.png';
import { Tweetic } from './Iconsvg';
import { Linkin } from './Iconsvg';
import { Linel } from './Iconsvg';
import { Disicon } from './Iconsvg';

const Team = () => {
    return (
        <div className='bg_team'>
            <Container className='custom_container pad_team'>
                <h2 className='ff-neueubold fw-bold fs-3lg text-white text-capitalize lh-120 text-center pb_70'>our Team</h2>
                <Row className='align-items-center justify-content-center'>
                    <Col md={4} sm={6} className='pb-md-0 pb-4'>
                        <div className='team_card'>
                            <img src={Teamimg1} alt="teamimg1" className='w-100' />
                            <div className='pt-3'>
                                <p className='mb-0 ff-raleway fs-3md fw-medium text-black text-capitalize lh-120 text-center'>Davoice</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-normal text-black text-capitalize lh-120 text-center pt-2 pb-3'>Davoice</p>
                                <div className='d-flex align-items-center justify-content-center gap-3 pb-1'>
                                    <Tweetic />
                                    <Linel />
                                    <Disicon />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className='pb-md-0 pb-4'>
                        <div className='team_card'>
                            <img src={Teamimg2} alt="teamimg2" className='w-100' />
                            <div className='pt-3'>
                                <p className='mb-0 ff-raleway fs-3md fw-medium text-black text-capitalize lh-120 text-center'>Davoice</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-normal text-black text-capitalize lh-120 text-center pt-2 pb-3'>Davoice</p>
                                <div className='d-flex align-items-center justify-content-center gap-3 pb-1'>
                                    <Tweetic />
                                    <Linel />
                                    <Disicon />
                                    <Linel />
                                    <Linkin />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className='team_card'>
                            <img src={Teamimg3} alt="teamimg3" className='w-100' />
                            <div className='pt-3'>
                                <p className='mb-0 ff-raleway fs-3md fw-medium text-black text-capitalize lh-120 text-center'>Davoice</p>
                                <p className='mb-0 ff-raleway fs-2sm fw-normal text-black text-capitalize lh-120 text-center pt-2 pb-3'>Davoice</p>
                                <div className='d-flex align-items-center justify-content-center gap-3 pb-1'>
                                    <Tweetic />
                                    <Linel />
                                    <Disicon />
                                    <Linel />
                                    <Linkin />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team