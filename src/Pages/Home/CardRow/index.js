import React from 'react';
import PropTypes from 'prop-types';

import './cardsRowStyle.scss'

import Heading from 'Components/Heading';
import Button from 'Components/Button';

function Index(props) {
    return (
        <div className={`cards-row width-desktop padding-lr`}>
            <Heading>{props.title}</Heading>
            <div className={`flex list-row`}>
                <div className={`card-box text-left flex flex-col space-between`}>
                    <p className={`card-para no-margin`}>Let our experts tailor a service plan for your fleet of
                        cars.?</p>
                    <Button variant={`secondary`}>
                        {props.buttonText}
                    </Button>
                </div>
                <div className={`card-gray hide-on-mobile`}>

                </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {
    title: 'Title',
    buttonText: 'Button'

};

export default Index;
