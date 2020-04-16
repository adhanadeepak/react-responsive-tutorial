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
                <div className={`card-box text-left`}>
                    <p className={`card-para no-margin`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laboriosam obcaecati recusandae repellat tempora. Blanditiis harum iure praesentium ut voluptatibus?</p>
                    <Button variant={`secondary`}>
                        {props.buttonText}
                    </Button>
                </div>
                <div className={`card-gray`}>

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
