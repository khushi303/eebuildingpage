import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className='bg_contactimg contact_pad'>
            <Container className='custom_container d-flex align-items-center justify-content-center flex-column'>
                <h2 data-aos="fade-down" className='ff-neueubold fs-3lg fw-bold text-center text-white text-capitalize lh-120 mb-0 mb-2'>Contact Us</h2>
                <p data-aos="fade-right" className='ff-raleway fs-2sm fw-normal text-center text-white lh-160 op_08'>Have a question or want to contribute? Reach out to us.</p>
                <form data-aos="fade-left" className='pt-4 pb-4 w-100'>
                    <div className='w-100 d-flex gap-5 pb-3'>
                        <input type="text" placeholder="First Name" className='w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs-2sm fw-normal text-white lh-150' />
                        <input type="text" placeholder="Last Name" className='w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs-2sm fw-normal text-white lh-150' />
                    </div>
                    <div className='w-100 d-flex gap-5 pb-3'>
                        <input type="text" placeholder="Email" className='w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs-2sm fw-normal text-white lh-150' />
                        <input type="text" placeholder="Phone Number" className='w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs-2sm fw-normal text-white lh-150' />
                    </div>
                    <textarea name="#" id="#" rows="4" placeholder="Message" className='resize_none w-100 bg-transparent outline_none border_bottom ff-raleway fs-2sm fw-normal text-white lh-150 '></textarea>
                </form>
                <button className='btn_submit ff-raleway fw-medium fs-md text-white'>SUBMIT</button>
            </Container>
        </div>
    )
}

export default Contact