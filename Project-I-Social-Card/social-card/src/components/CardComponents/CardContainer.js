import React from 'react';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

import './Card.css';

const cardContainer = () => (
    <section className="CardContainer">
        <CardBanner />
        <CardContent />
    </section>
)

export default cardContainer;