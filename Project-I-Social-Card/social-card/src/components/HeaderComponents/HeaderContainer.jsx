import React from 'react';

import Img from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.css';


const header = () => (
    <header>
        <main className="Header-Main-Container">
            <Img />
        <div style={{marginLeft:'10px'}}>
            <HeaderTitle />
            <HeaderContent />
        </div>
        </main>
    </header>
);

export default header;
