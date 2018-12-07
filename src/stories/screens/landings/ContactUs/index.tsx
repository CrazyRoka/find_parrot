import * as React from 'react';
import './index.scss';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import phone from '../../../../assets/images/phone.png';
import SubmitButton from '../../../../components/SubmitButton';
import Field from '../../../../components/Field';

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
                        <Field type="email" placeholder="Email Addres" />
                        <Field type="text" placeholder="Name" />
                    </div>
                    <textarea className="contact-message" placeholder="Message" />
                    <SubmitButton />
                </form>
            </div>
        </div>
        <Footer />
    </div>

export default ContactUs;