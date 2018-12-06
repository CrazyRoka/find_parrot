import * as React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './index.scss';

const About = () =>
    <div className="about">
        <Header isFixed={true} />
        <div className="about-section">
            <div className="image-effect"/>
            <div className="about-text">
                <div className="title" >
                    Find Parrot it   
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam, urna efficitur suscipit facilisis, est erat accumsan turpis, nec commodo nulla massa eget purus. Integer imperdiet, elit in vulputate hendrerit, magna ipsum ultricies leo, vel sagittis libero urna quis ligula. Integer scelerisque volutpat tellus in eleifend. Vestibulum et blandit nisi, sit amet mollis mauris. In varius fringilla accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </div>
                <div className="text">
                    Curae; Aliquam erat volutpat. Nullam vestibulum, enim sed ullamcorper facilisis, lectus ipsum varius leo, at euismod nulla felis eget metus. In aliquet ultricies nunc, nec molestie augue molestie a. Nullam laoreet venenatis tortor. Vestibulum blandit volutpat eros. Sed diam tellus, tristique ut tellus id, ornare vestibulum sapien. Nulla tincidunt venenatis libero sit amet dictum. Donec sagittis quam nulla, eget varius urna ultrices non.
                </div>
            </div>
        </div>
        <Footer />
    </div>

export default About;