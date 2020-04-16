import React from 'react';
import PropTypes from 'prop-types';

import Service from 'Assets/Images/scheduledServices.svg'

function Card(props) {
    return (
        <div className={`card flex flex-col`}>
            <img src={props.image} className={`card-img`} alt=""/>
            <h5 className={`card-title no-margin`}>Scheduled Services</h5>
        </div>
    );
}

Card.propTypes = {};
Card.defaultProps = {
    image: Service,
};

export default Card;
