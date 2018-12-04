import * as React from 'react';
import './index.css';

export interface Props {
    children?: any;
}

const HelperBox = ({ children } : Props) =>
    <div className="helper-box">
        {children}
    </div>

export default HelperBox;