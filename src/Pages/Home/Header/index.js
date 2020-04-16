import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Button from '../../../Components/Button';

import WhiteLogo from '../../../Assets/Images/white-logo.png';
import BlackLogo from '../../../Assets/Images/red_logo.png';
import Phone from 'Assets/Images/black_phone.png';
import MenuIcon from 'Assets/Images/menu.svg';

function Header(props) {
    return (
        <div id={`header`} className={`header-container`}>
            <div className={`top-row`}>
                <div className={`top-headline flex items-center space-between hide-on-mobile`}>
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
                <div className={`nav-bar flex space-between padding-lr items-center`}>
                    <div className={`menu-icon-wrapper hide-on-desktop`}>
                        <img src={MenuIcon} alt="menu-icon"/>
                    </div>
                    <div className={`image-container flex items-center`}>
                        <img src={WhiteLogo} className={`hide-on-mobile`} alt="go-mechanic"/>
                        <img src={BlackLogo} alt="logo" className={`hide-on-desktop`}/>
                        <div className={`select-wrapper`}>
                            <select name="location-select" id="location-select" className={`location-select`}>
                                <option value="gurgaon">Gurgoan</option>
                            </select>
                        </div>
                    </div>
                    <div className={`flex items-center hide-on-mobile`}>
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
                    <div className={`phone-img-container hide-on-desktop`}>
                        <img src={Phone} alt=""/>
                    </div>
                </div>
                <div className={`header-banner`}>
                   <div className={`mobile-headline-banner hide-on-desktop`}>
                       <h1>The Best Car Service Awaits You !</h1>
                   </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
