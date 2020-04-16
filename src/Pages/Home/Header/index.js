import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Button from '../../../Components/Button';

import WhiteLogo from '../../../Assets/Images/white-logo.png';

function Header(props) {
    return (
        <div id={`header`} className={`header-container`}>
            <div className={`top-row`}>
                <div className={`top-headline flex items-center space-between`}>
                    <div className={`left flex items-center`}>
                        <Button variant={`primary`}>
                            New
                        </Button>
                        <h5 className={`has-gutter headline color-is-black no-margin`}>
                            Get the GoMechanic App for ios and Android for exclusive offer!
                        </h5>
                    </div>
                    <div className={`right flex items-center`}>
                        <h5 className={`has-gutter headline color-is-black no-margin`}>
                            24x7 Helpline
                        </h5>
                        <span className={`green-link`}>93855-93855</span>
                    </div>
                </div>
                <div className={`nav-bar flex space-between padding-lr`}>
                    <div className={`image-container`}>
                        <img src={WhiteLogo} alt="go-mechanic"/>
                    </div>
                    <div className={`flex items-center`}>
                        <ul className={`nav-list list-style-none no-padding color-is-white flex`}>
                            <li>Accessories</li>
                            <li>Services</li>
                            <li>Offers</li>
                            <li>Help</li>
                        </ul>
                        <Button variant={`primary`}>
                            Login/Sign up
                        </Button>
                    </div>
                </div>
                <div className={`header-banner`}>

                </div>
            </div>
        </div>
    );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
