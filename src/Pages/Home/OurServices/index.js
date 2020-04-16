import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'Components/Heading'
import Card from './Card';

import './styles.scss'

function Services(props) {
    return (
        <div className={`width-desktop padding-lr`}>
            <Heading>Our Services</Heading>
            <p className={`text-left`}>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus. Lorem ipsum.
                Lorem ipsum</p>

            <div className={`services-cards-list flex`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

Services.propTypes = {};
Services.defaultProps = {};

export default Services;
