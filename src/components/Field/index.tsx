import * as React from 'react';
import './index.scss';

export interface Props {
    type?: string;
    placeholder?: string;
    ref?: any;
}

const Field = ({ type = 'text', placeholder } : Props) =>
    <input className="input-field" type={type} placeholder={placeholder} />

export default Field;