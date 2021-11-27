import React from 'react';
import { Image, Typography } from 'antd';

import './header.scss';

import logo from '../logo.svg';

const { Title } = Typography;

const Header = () => {
    return (
        <div className='header-bar'>
            <Image className='logo' src={logo} preview={false} width='8vw' />
            <Title level={1} className='header-title'>Social Connections</Title>
        </div>
    );
};

export default Header;
