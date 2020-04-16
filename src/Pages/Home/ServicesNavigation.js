import React from 'react';
import PropTypes from 'prop-types';

import Previous from '../../Assets/Images/back.png';
import Next from '../../Assets/Images/next.png';

import './homeStyle.scss'

function ServicesNavigation(props) {
    return (
        <div className={`service-nav-row flex items-center padding-lr`}>
            <div className={`services-nav-bar flex items-center width-desktop`}>
                <div className={`prev-icon`}>
                    <img src={Previous} alt="previous"/>
                </div>
                <div>
                    <ul className={`services-list no-padding no-margin flex items-center list-style-none`}>
                        <li className={`services-list-item selected`}>
                            Our Services
                        </li>
                        <li className={`services-list-item`}>
                            Car Accessories
                        </li>
                        <li className={`services-list-item`}>
                            How GoMechanic Works?
                        </li>
                        <li className={`services-list-item`}>
                            GoMechanic Be
                        </li>

                    </ul>
                </div>
                <div className={`next-icon`}>
                    <img src={Next} alt="next"/>
                </div>

            </div>
        </div>
    );
}

ServicesNavigation.propTypes = {};
ServicesNavigation.defaultProps = {};

export default ServicesNavigation;
