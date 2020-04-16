import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'Components/Heading';

import './servicesStyles.scss'
import Button from "Components/Button";

function Index(props) {
    return (
        <div className={`service-guide-container width-desktop padding-lr`}>
            <Heading>
                GoMechanic Service Guide
            </Heading>
            <div className={`services-container text-left`}>
                <div className={`service-content`}>
                    <h4 className={`service-title`}>Services Offered</h4>
                    <p className={`no-margin`}>With GoMechanic, you can choose from a wide assortment of car services in Delhi. Apart from periodic car
                        servicing, we also offer:</p>
                    <ul className={`no-padding flex list flex-wrap`}>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>

                    </ul>
                </div>
                <div className={`service-content`}>
                    <h4 className={`service-title`}>Services Offered</h4>
                    <p className={`no-margin`}>With GoMechanic, you can choose from a wide assortment of car services in Delhi. Apart from periodic car
                        servicing, we also offer:</p>
                    <ul className={`no-padding flex list flex-wrap`}>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>
                        <li>
                            Scheduled car services
                        </li>

                    </ul>
                </div>
                <div className={`service-content`}>
                    <h4 className={`service-title`}>Services Offered</h4>
                    <p className={`no-margin`}>With GoMechanic, you can choose from a wide assortment of car services in Delhi. Apart from periodic car
                        servicing, we also offer:</p>
                </div>
            </div>
            <div className={`see-more-btn`}>
                <div className={`overlay`}>
                    <Button variant={`white`}>See More</Button>
                </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
