import React from 'react';
import PropTypes from 'prop-types';

import './downloadApp.styles.scss'
import Heading from 'Components/Heading';
import Download from 'Assets/Images/app-screenshot.png';
import PlayStore from 'Assets/Images/play.png';
import AppStore from 'Assets/Images/app-store.png';
import India from 'Assets/Images/india.svg';

function Index(props) {
    return (
        <div className={`download-app-container padding-lr`}>
             <Heading>
                 Download GoMechanic App
             </Heading>
            <div className={`wrapper flex flex-col-mobile`}>
                <div className={`left-image-container`}>
                    <img src={Download} alt=""/>
                </div>
                <div className={`right-container`}>
                    <div className={`image-container`}>
                        <img src={PlayStore} className={`play-store`} alt=""/>
                        <img src={AppStore} className={`app-store`} alt=""/>
                    </div>
                    <div className={`input-container flex space-between`}>
                        <span className={`india-flag`}><img src={India} alt="india"/></span>
                        <input type="tel" maxLength={`10`} placeholder={`Mobile Number`} className={`mobile-input`}/>
                        <button className={`link-btn`}>Get App Link</button>
                    </div>
                </div>
                <div className={`gray-ribbon hide-on-mobile`}>

                </div>

            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
