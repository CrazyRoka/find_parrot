import * as React from 'react';
import './index.scss';
import arrow from '../../assets/images/arrow.png';

export interface Props {
    text?: string;
}

const SubmitButton = ({ text } : Props) =>
    <button className="submit">
        { text ? 
            text :
            <img src={arrow}/>
        }
    </button>


export default SubmitButton;
