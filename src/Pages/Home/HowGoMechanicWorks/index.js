import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'Components/Heading';
import Card from "./Card";

import CarImg from 'Assets/Images/Select-The-Perfect-Car-Service.png';

function Index(props) {
    return (
        <div className={`width-desktop how-mechanics-works padding-lr`}>
            <Heading>
                How GoMechanic works?
            </Heading>
            <div className={`list flex`}>
                <div className={``}>
                    <ul className={`works-list list-style-none no-padding`}>
                        <li className={`works-list-item flex `}>
                            <div className={`number-item flex flex-col items-center justify-center hide-on-mobile`}>
                                <div className={`number-card`}>
                                    1
                                </div>
                                <div className={`gray-line`}>

                                </div>
                            </div>
                            <div className={`content`}>
                                <h4 className={`no-margin`}>Select whats best for your car</h4>
                                <p className={``}>Find from a wide variety of packages & services</p>
                            </div>
                            <div className={`image-div-right`}>
                                <Card image={CarImg}/>
                            </div>
                        </li>
                        <li className={`works-list-item flex row-reverse-mobile`}>
                            <div className={`number-item flex flex-col items-center justify-center hide-on-mobile`}>
                                <div className={`number-card`}>
                                    2
                                </div>
                                <div className={`gray-line`}>

                                </div>
                            </div>
                            <div className={`content`}>
                                <h4 className={`no-margin`}>Select whats best for your car</h4>
                                <p className={``}>Find from a wide variety of packages & services</p>
                            </div>
                            <div className={`image-div-right`}>
                                <Card image={CarImg}/>
                            </div>
                        </li>
                        <li className={`works-list-item flex `}>
                            <div className={`number-item flex flex-col items-center justify-center hide-on-mobile`}>
                                <div className={`number-card`}>
                                    3
                                </div>
                                <div className={`gray-line`}>

                                </div>
                            </div>
                            <div className={`content`}>
                                <h4 className={`no-margin`}>Select whats best for your car</h4>
                                <p className={``}>Find from a wide variety of packages & services</p>
                            </div>
                            <div className={`image-div-right`}>
                                <Card image={CarImg}/>
                            </div>
                        </li>
                        <li className={`works-list-item flex row-reverse-mobile`}>
                            <div className={`number-item flex flex-col items-center justify-center hide-on-mobile`}>
                                <div className={`number-card`}>
                                    4
                                </div>
                                <div className={`gray-line`}>

                                </div>
                            </div>
                            <div className={`content`}>
                                <h4 className={`no-margin`}>Select whats best for your car</h4>
                                <p className={``}>Find from a wide variety of packages & services</p>
                            </div>
                            <div className={`image-div-right`}>
                                <Card image={CarImg}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
