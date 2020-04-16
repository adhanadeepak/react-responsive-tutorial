import React from 'react';
import PropTypes from 'prop-types';

import Service from 'Assets/Images/scheduledServices.svg'

import './styles.scss';

function Card(props) {
    return (
        <div className={`gray-card flex items-center`}>
            <img src={props.image} className={`card-img`} alt=""/>
        </div>
    );
}

Card.propTypes = {};
Card.defaultProps = {
    image: Service,
};

export default Card;
