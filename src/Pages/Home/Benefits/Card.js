import React from 'react';
import PropTypes from 'prop-types';

import Service from 'Assets/Images/scheduledServices.svg'

import './benefitsStyles.scss';

function Card(props) {
    return (
        <div className={`gray-card round flex items-center`}>
            <img src={props.image} className={`card-img`} alt=""/>
        </div>
    );
}

Card.propTypes = {};
Card.defaultProps = {
    image: Service,
};

export default Card;