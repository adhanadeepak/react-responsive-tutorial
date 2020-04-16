import React from 'react';
import PropTypes from 'prop-types';

import './headingStyle.scss'

function H(props) {
    return (
        <div className={`heading-container`}>
           <h2 className={`heading-h2 flex items-center text-left`}>
               {props.children}
           </h2>
        </div>
    );
}

H.propTypes = {};
H.defaultProps = {};

export default H;
