import * as React from 'react';
import './index.scss';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import phone from '../../../../assets/images/phone.png';
import arrow from '../../../../assets/images/arrow.png';

const ContactUs = () =>
    <div className="contact-us">
        <Header />
        <div className="contact-section">
            <div className="contact-container">
                <div className="title">CONTACT US FOR HELP</div>
                <div className="small-title">If you have some questions or proposition please contact us</div>
                <button><img className="phone" src={phone} />800 485 2198</button>
                <form className="contact-form">
                    <div className="email-name">
                        <input type="text" placeholder="Email Addres" />
                        <input type="text" placeholder="Name" />
                    </div>
                    <textarea className="contact-message" placeholder="Message" />
                    <button className="submit"><img src={arrow}/></button>
                </form>
            </div>
        </div>
        <Footer />
    </div>

export default ContactUs;