import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'Components/Heading'
import Brand from 'Assets/Images/honda.png';

import './brandsStyles.scss'

function Brands(props) {
    return (
        <div id={`brands-row`} className={`brand-row width-desktop padding-lr`}>
            <Heading>
                {props.title}
                {
                    props.subtitle ?
                    <span className={`sub-title`}>A big handful of those</span>
                    : null
                }
                    </Heading>
            <div className={`brands-list flex flex-wrap`}>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
                <div className={`brand-image-container`}>
                    <img src={Brand} alt=""/>
                </div>
            </div>

        </div>
    );
}

Brands.propTypes = {};
Brands.defaultProps = {
    title: 'Title',
    subtitle: false
};

export default Brands;
