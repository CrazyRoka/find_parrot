import * as React from 'react';
import './index.scss';
import arrow from '../../assets/images/arrow.png';

export interface Props {
    children?: any;
    onClick?: Function;
}

const SubmitButton = ({ children = <img src={arrow} />, onClick = () => {} } : Props) =>
    <button className="submit" onClick={event => onClick(event)}>
        { children }
    </button>


export default SubmitButton;
