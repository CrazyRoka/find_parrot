import * as React from 'react';
import './index.css';
import HelperBox from '../HelperBox';
import clickHand from '../../assets/images/clickHand.png';
import clickCategory from '../../assets/images/clickCategory.png';

const HelperContainer = () =>
    <div className="helper-container">
        <HelperBox>
            <span><img src={clickCategory} /></span>
            <span>All categories</span>
        </HelperBox>
        <HelperBox>
            <span><img src={clickHand} /></span>
            <span>How it works?</span>
        </HelperBox>
    </div>

export default HelperContainer;