import React from 'react';
import PropTypes from 'prop-types';
import Heading from "Components/Heading";

import Card from './Card';
import CarImg from 'Assets/Images/Select-The-Perfect-Car-Service.png';

import './benefitsStyles.scss';

function Benefits(props) {
    return (
        <div id={`benefits-row`} className={`width-desktop benefits-row padding-lr`}>
            <Heading>
                GoMechanic Benefits
            </Heading>
            <div className={`benefits-list flex flex-wrap`}>
                <div className={`benefit flex`}>
                    <Card image={CarImg}/>
                    <div className={`benefit-content text-left`}>
                        <h4 className={`no-margin benefit-title`}>Free Pick-Up & Drop</h4>
                        <p>We provide convenience at
                            your doorstep.</p>
                    </div>
                </div>
                <div className={`benefit flex`}>
                    <Card image={CarImg}/>
                    <div className={`benefit-content text-left`}>
                        <h4 className={`no-margin benefit-title`}>Free Pick-Up & Drop</h4>
                        <p>We provide convenience at
                            your doorstep.</p>
                    </div>
                </div>
                <div className={`benefit flex`}>
                    <Card image={CarImg}/>
                    <div className={`benefit-content text-left`}>
                        <h4 className={`no-margin benefit-title`}>Free Pick-Up & Drop</h4>
                        <p>We provide convenience at
                            your doorstep.</p>
                    </div>
                </div>
                <div className={`benefit flex`}>
                    <Card image={CarImg}/>
                    <div className={`benefit-content text-left`}>
                        <h4 className={`no-margin benefit-title`}>Free Pick-Up & Drop</h4>
                        <p>We provide convenience at
                            your doorstep.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

Benefits.propTypes = {};
Benefits.defaultProps = {};

export default Benefits;
