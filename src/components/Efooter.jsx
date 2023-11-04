import React from 'react'
import { Container } from 'react-bootstrap';
import Footerlogo from '../assets/images/webpimg/footerlogo.webp';
import { Youtube, Github, Tweet, Auicon, Discord, Micon, Msgicon, Fileicon, Noteicon } from './Iconsvg';

const Efooter = () => {
    return (
        <div className='bg-white'>
            <Container className='custom_container'>
                <div className=' d-flex align-items-center justify-content-center flex-column footer_padding'>
                    <img data-aos="fade-down" src={Footerlogo} alt="footerlogo" className='mw-107 w-100' />
                    <p className='ff-raleway fs-2sm fw-normal text_blue pt-2 mb-0'>Join Our Community</p>
                    <ul className='mb-0 d-flex align-items-center list-unstyled justify-content-center footer_link text-nowrap flex-flow_wrap'>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>About</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>IBO Event</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>EEFI Tokenomics</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>Team</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>Roadmap</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>Partners</a></li>
                        <li><a href="#" className=' ff-raleway fs-2sm fw-normal text-black op_07 footer_li_link'>Contact Us</a></li>
                    </ul>
                    <div className='d-flex align-items-center justify-content-center footer_icon flex-flow_wrap gap-sm-3 gap-2'>
                        <Youtube />
                        <Github />
                        <Tweet />
                        <Auicon />
                        <Discord />
                        <Micon />
                        <Msgicon />
                        <Fileicon />
                        <Noteicon />
                    </div>
                </div>
            </Container>
            <div className='bg_gray'>
                <Container className='custom_container d-flex align-items-center justify-content-between py-lg-3 py-4'>
                    <p className='mb-0 ff-railway fs-sm fw-normal op_07 text-black'>@Copyright 2023</p>
                    <p className='mb-0 ff-railway fs-sm fw-normal op_07 text-black'>Privacy policy</p>
                </Container>
            </div>
        </div>
    )
}

export default Efooter;