import * as React from 'react';
import { Link } from "react-router-dom";
import './index.css';

export interface Props {
    children: any;
    link: string;
}

const Navigation = ({ children, link }: Props) =>
    <div className="navigation">
        <Link to={link} className="link">{children}</Link>
    </div>

export default Navigation;